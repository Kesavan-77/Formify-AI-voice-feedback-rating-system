from flask import Flask, request, jsonify
from transformers import BertTokenizer, BertForSequenceClassification
import torch

app = Flask(__name__)

# Load pretrained BERT model and tokenizer
MODEL_NAME = 'bert-base-uncased'
tokenizer = BertTokenizer.from_pretrained(MODEL_NAME)
model = BertForSequenceClassification.from_pretrained(MODEL_NAME, num_labels=5)

def preprocess_review(review):
    """Preprocess a single review: tokenization and converting to tensor."""
    inputs = tokenizer(review, return_tensors='pt', max_length=512, truncation=True, padding=True)
    return inputs

def predict_rating(review):
    """Predict the rating of a single review."""
    inputs = preprocess_review(review)
    with torch.no_grad():  # Disable gradient calculations for inference
        outputs = model(**inputs)
    predicted_label = torch.argmax(outputs.logits, dim=1).item() + 1  # Convert to 1-5 scale
    return predicted_label

@app.route("/analyze", methods=["POST"])
def analyze():
    # Get the JSON data (assumes reviews are in a dictionary format)
    data = request.json
    input_reviews = list(data.values())
    
    # Predict ratings for each review
    predictions = []
    for review in input_reviews:
        predicted_rating = predict_rating(review)
        predictions.append(predicted_rating)
    
    # Calculate average rating
    avg_rating = sum(predictions) / len(predictions) if predictions else 0
    
    # Identify best and worst reviews
    best_index = predictions.index(max(predictions)) if predictions else None
    worst_index = predictions.index(min(predictions)) if predictions else None
    
    best_service = input_reviews[best_index] if best_index is not None else None
    worst_service = input_reviews[worst_index] if worst_index is not None else None
    
    # Return the analysis results
    return jsonify({
        'predicted_ratings': avg_rating,
        'best_service': best_service,
        'worst_service': worst_service
    })

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000, debug=True)