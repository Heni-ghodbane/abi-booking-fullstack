export const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 12 },
};

export const layoutEdit = {
    labelCol: { span: 5 },
    wrapperCol: { span: 18 },
};

export const imagesPath = process.env.PUBLIC_URL + '/assets/';

/* eslint-disable no-template-curly-in-string */
export const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
