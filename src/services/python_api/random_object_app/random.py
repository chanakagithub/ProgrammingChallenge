from .config import Config
import random
import string

# file_max_size = 1024 * 1024 * 2  # 2MB
# letters = string.ascii_lowercase
# str_max_length = 50
# integer_max_size = len(str(sys.maxsize))


def get_content():
    content_size = 0
    content = ''
    separator = ','
    while content_size < Config.file_max_size:
        available_size = Config.file_max_size - content_size
        random_object = get_random_object(available_size)
        content += (separator if content != '' else '') + random_object
        content_size += len(random_object) + len(separator)

    return content


def get_random_object(available_size):
    object_type = random.randrange(4)
    if object_type == 0:
        return get_random_alphabetical_strings(available_size)
    elif object_type == 1 and available_size > 3:
        return get_random_real_numbers(available_size)
    elif object_type == 2:
        return get_random_integers(available_size)
    else:
        return get_random_alphanumerics(available_size)


def get_random_alphabetical_strings(available_size):
    max_length = Config.str_max_length if available_size > Config.str_max_length else available_size
    length = random.randint(1, max_length)
    result_str = ''.join(random.choice(Config.letters) for _ in range(length))
    return result_str


def get_random_real_numbers(available_size):
    max_length = Config.integer_max_size if available_size > Config.integer_max_size else available_size
    max_length = random.randint(3, max_length+1)
    sub_length = int(max_length/2)
    max_value = (10**sub_length)-1
    real_number = str(random.randint(0, max_value) + random.random())
    result = real_number[:max_length] if len(
        real_number) > max_length else real_number
    return result


def get_random_integers(available_size):
    max_length = Config.integer_max_size if available_size > Config.integer_max_size else available_size
    max_length = random.randint(1, max_length+1)
    max_value = (10**max_length)-1
    result = str(random.randint(0, max_value))
    return result


def get_random_alphanumerics(available_size):
    max_length = Config.str_max_length if available_size > Config.str_max_length else available_size
    length = random.randint(1, max_length)
    result_str = ''.join(random.choice(Config.letters + string.digits)
                         for _ in range(length))
    return result_str


def get_content_summary(content):
    items = content.split(',')
    alphabetical_count = 0
    real_numbers_count = 0
    integers_count = 0
    alphanumerics_count = 0
    for item in items:
        if item.isalpha():
            alphabetical_count += 1
            continue

        if '.' in item:
            real_numbers_count += 1
            continue

        if item.isnumeric():
            integers_count += 1
            continue

        if (item.isalnum()):
            alphanumerics_count += 1
            continue

    return {'alphabetical_count': alphabetical_count,
            'real_numbers_count': real_numbers_count,
            'integers_count': integers_count,
            'alphanumerics_count': alphanumerics_count}
