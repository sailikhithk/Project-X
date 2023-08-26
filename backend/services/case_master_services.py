import traceback
import uuid
from models.case_master import CaseMaster
from database import session


class CaseMasterService:
    def __init__(self):
        pass

    def create_case(self, user_id, status, file_path):
        new_record = CaseMaster(
            file_path = file_path,
            status = status,
            created_by = user_id
        )
        session.add(new_record)
        session.commit()
        return new_record

    def upload_file(self, video_file, user_id):
        unique_id = uuid.uuid4()
        video_path = f'data/{unique_id}_{video_file.filename}'
        video_file.save(video_path)
        self.create_case(user_id, "CREATED", video_path)
        return {"message": "video uploaded"}
