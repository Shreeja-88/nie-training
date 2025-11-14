# Use Python + Node combined base image
FROM nikolaik/python-nodejs:python3.10-nodejs20

# Set working directory
WORKDIR /app

# Copy whole project
COPY . .

# ---------------------------
# Install Python dependencies
# ---------------------------
WORKDIR /app/backend
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# ---------------------------
# Build React frontend
# ---------------------------
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# Copy React build → Django template folder
WORKDIR /app/backend
RUN mkdir -p templates
RUN cp -r /app/frontend/build/* /app/backend/templates/

# ---------------------------
# Prepare Django backend
# ---------------------------
RUN python manage.py collectstatic --noinput

# Expose port for Railway
EXPOSE 8000

# Start Django with Gunicorn
CMD ["gunicorn", "trainers_search_app.wsgi:application", "--bind", "0.0.0.0:8000"]
