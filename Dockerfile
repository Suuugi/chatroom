FROM python:latest

WORKDIR /app

COPY app .
RUN pip install -r requirements.txt

CMD ["python3", "-m", "flask", "run", "--host=0.0.0.0"]