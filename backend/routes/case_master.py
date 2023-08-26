import logging
import traceback

from flask import Blueprint, request, jsonify
from jsonschema import validate
from services import CaseMasterService
case_master = Blueprint("case_master", __name__)
logger = logging.getLogger("case_master")
# logger.info('Login page accessed')

case_master_service_obj = CaseMasterService()


@case_master.route('/upload', methods=['POST'])
def upload_video():
    if 'video' not in request.files:
        return 'No video file uploaded', 400

    video_file = request.files['video']

    if video_file.filename == '':
        return 'No selected video file', 400

    case_master_service_obj.upload_file(video_file)
    return 'Video uploaded successfully'