import datetime
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Boolean, Float, JSON
from sqlalchemy.sql import func
from database import Base

class InstitutionMaster(Base):
    __tablename__ = "institution_master"

    id = Column(Integer, primary_key=True)
    institution_name = Column(String(255), index=True, unique=True)
    number_of_students = Column(Integer, default=0)
    point_of_contact = Column(String(255))
    number_of_departments = Column(Integer, default=0)
    country_id = Column(Integer, ForeignKey("country.id"))
    city = Column(String(255))
    registration_number = Column(String(255))
    domains = Column(String(255), default="")
    
    created_date = Column(DateTime, default=func.now(), nullable=False)
    updated_date = Column(DateTime, default=func.now(), onupdate=func.now(), nullable=False)
