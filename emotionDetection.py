
"""
Emotion Recognition from Video using FER2013 Dataset

This script analyzes emotions from video input using the FER2013 dataset and Python.
It saves the processed video with emotion annotations and shows the emotion count
at the end.

Required Libraries:
- FER
- OpenCV

Usage:
1. Install the required libraries:
2. Update the video input path in the `video_capture` line.
3. Run the script. The output video will be saved as 'output.avi' in the same folder,
and the emotion count will be printed at the end.

Note: This script does not display the video while processing it.
"""

from fer import FER
import cv2

emotion_detector = FER(mtcnn=True)
video_capture = cv2.VideoCapture('video.mp4')

# Set up video writer
frame_width = int(video_capture.get(cv2.CAP_PROP_FRAME_WIDTH))
frame_height = int(video_capture.get(cv2.CAP_PROP_FRAME_HEIGHT))
fourcc = cv2.VideoWriter_fourcc(*'XVID')
out = cv2.VideoWriter('output.avi', fourcc, 30, (frame_width, frame_height))

# Initialize emotion count dictionary
emotion_count = {
 'angry': 0,
 'disgust': 0,
 'fear': 0,
 'happy': 0,
 'sad': 0,
 'surprise': 0,
 'neutral': 0
}

while video_capture.isOpened():
 ret, frame = video_capture.read()
 if not ret:
     break

 # Detect emotions in the frame
 emotions = emotion_detector.detect_emotions(frame)

 # Draw rectangles around detected faces and display emotions
 for emotion in emotions:
     (x, y, w, h) = emotion['box']
     cv2.rectangle(frame, (x, y), (x + w, y + h), (255, 0, 0), 2)

     # Get the dominant emotion
     dominant_emotion = max(emotion['emotions'], key=emotion['emotions'].get)
     emotion_count[dominant_emotion] += 1

     cv2.putText(frame, dominant_emotion, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 0, 0), 2)

 # Write the frame to the output video
 out.write(frame)

# Release video capture, video writer, and close windows
video_capture.release()
out.release()
cv2.destroyAllWindows()

# Print emotion count
print("Emotion count:")
for emotion, count in emotion_count.items():
 print(f"{emotion}: {count}")