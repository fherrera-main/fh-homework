export const SET_STEP1_FORM = 'SET_STEP1_FORM';
export const SET_STEP2_FORM = 'SET_STEP2_FORM';
export const SET_STEP3_FORM = 'SET_STEP3_FORM';

export const set_step1_form_action = (formData) => {
    return {
        type: SET_STEP1_FORM,
        payload: formData
    }
}

export const set_step2_form_action = (formData) => {
    return {
        type: SET_STEP2_FORM,
        payload: formData
    }
}

export const set_step3_form_action = (formData) => {
    return {
        type: SET_STEP3_FORM,
        payload: formData
    }
}