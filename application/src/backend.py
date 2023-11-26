from flask import Flask, request, jsonify
from joblib import load
from flask_cors import CORS  # To handle CORS if your frontend is on a different domain

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the trained model and label encoder
model = load('./job_scams_model.joblib')
label_encoder = load('./label_encoder.joblib')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Extract the job listing data from the POST request
        data = request.json

        # Convert boolean values to strings ('True'/'False')
        data['telecommuting'] = str(data.get('telecommuting', False))
        data['has_company_logo'] = str(data.get('has_company_logo', False))
        data['has_questions'] = str(data.get('has_questions', False))

        # Combine the text fields into a single string
        combined_text = ' '.join([
            data.get('title', ''),
            data.get('location', ''),
            data.get('department', ''),
            data.get('salary_range', ''),
            data.get('company_profile', ''),
            data.get('description', ''),
            data.get('requirements', ''),
            data.get('benefits', ''),
            data['telecommuting'],
            data['has_company_logo'],
            data['has_questions'],
            data.get('employment_type', ''),
            data.get('required_experience', ''),
            data.get('required_education', ''),
            data.get('industry', ''),
            data.get('function', '')
        ])
        print("Combined text for prediction:", combined_text)  # Debug print

        # Predict using the model
        prediction = model.predict([combined_text])
        print("Raw prediction:", prediction)  # Debug print

        # Decode the prediction into a label
        label = label_encoder.inverse_transform(prediction)[0]
        print("Decoded label:", label)  # Debug print

        # Return the prediction as a JSON response
        return jsonify({'prediction': label})

    except Exception as e:
        # If any error occurs
        print("An error occurred:", e)  # Debug print
        return jsonify({'error': str(e)}), 500
if __name__ == '__main__':
    app.run(debug=True, port=5005)