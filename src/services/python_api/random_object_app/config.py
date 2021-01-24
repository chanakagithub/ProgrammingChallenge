import string
import sys

class Config:
    file_max_size = 1024 * 1024 * 2  # 2MB
    letters = string.ascii_lowercase
    str_max_length = 50
    integer_max_size = len(str(sys.maxsize))
    base_uri = 'http://127.0.0.1:5000'
    file_path = 'files/random.txt'