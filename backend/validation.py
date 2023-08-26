REGISTER_SCHEMA = {
    "type": "object",
    "properties": {
        "username": {"type": "string"},
        "password": {"type": "string"},
        "email": {"type": "string", "format": "email"},
        "institution": {"type": "string"},
        "role": {"type": "string", "enum": ["Admin", "Teacher", "Student"]},
    },
    "required": ["username", "password", "email", "institution", "role"],
}

LOGIN_SCHEMA = {
    "type": "object",
    "properties": {
        "username": {"type": "string"},
        "password": {"type": "string"}
    },
    "required": ["username", "password"]
}

RESET_PASSWORD_SCHEMA = {
    "type": "object",
    "properties": {
        "user_id": {"type": "integer"},
        "password": {"type": "string"}
    },
    "required": ["user_id", "password"]
}