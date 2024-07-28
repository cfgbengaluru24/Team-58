

from django.shortcuts import render, redirect
from django.http import StreamingHttpResponse, JsonResponse
import cv2

malpractice_detected = False
face_cascade = cv2.CascadeClassifier(r"C:\Users\sooda\cfg\Team-58\Djangoapp\haarcascade_frontalface_default.xml")

def gen(camera):
    global malpractice_detected
    while True:
        ret, frame = camera.read()
        
        if not ret:
            break

        

        _, jpeg = cv2.imencode('.jpg', frame)
        frame = jpeg.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

def video_feed(request):
    camera = cv2.VideoCapture(0)
    return StreamingHttpResponse(gen(camera), content_type='multipart/x-mixed-replace; boundary=frame')

def test(request):
    return render(request, 'test.html')

def check_malpractice(request):
    global malpractice_detected
    return JsonResponse({'malpractice': malpractice_detected})
