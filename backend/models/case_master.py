import datetime
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Boolean, Float, JSON
from sqlalchemy.sql import func
from database import Base
from sqlalchemy.orm import relationship, backref


class CaseMaster(Base):
    __tablename__ = "case_master"

    id = Column(Integer, primary_key=True)
    file_path = Column(String(64), unique=True)
    status = Column(String(64))
    result = Column(JSON)
    created_by = Column(Integer)
    created_date = Column(DateTime, default=func.now(), nullable=False)
    updated_date = Column(DateTime, default=func.now(), onupdate=func.now(), nullable=False)
