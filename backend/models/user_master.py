import datetime
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Boolean, Float, JSON
from sqlalchemy.sql import func
from database import Base

class UserMaster(Base):
    __tablename__ = "user_master"
    id = Column(Integer, primary_key=True)
    institution_id = Column(Integer, ForeignKey("institution_master.id"))
    first_name = Column(String(255))
    last_name = Column(String(255), default="")
    middle_name = Column(String(255), default="")
    email = Column(String(255), unique=True)
    phone_number = Column(String(255))
    country_id = Column(Integer, ForeignKey("country.id"))
    city = Column(String(255))
    desiganation = Column(String(255))
    preference = Column(String(255))
    timing = Column(String(255))
    password_hash = Column(String(128))
    department_id = Column(Integer, ForeignKey("department.id"))
    role_id = Column(Integer, ForeignKey("role.id"))
    branch_id = Column(Integer, ForeignKey("branch.id"))
    programme = Column(String(255))
    is_ug = Column(Boolean)
    address = Column(String(255), default="")
    number_of_interviews = Column(Integer, default=0)
    
    created_date = Column(DateTime, default=func.now(), nullable=False)
    updated_date = Column(DateTime, default=func.now(), onupdate=func.now(), nullable=False)
    password_modified_date = Column(DateTime)
    last_login_date = Column(DateTime)
    
