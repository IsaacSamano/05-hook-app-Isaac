import { act, renderHook } from "@testing-library/react";
import { useForm } from '../../src/hooks/useForm'

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Isaac',
        email: 'isaac@gmail.com'
    }

    test('Debe regresar los valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onResetForm: expect.any(Function),
            onInputChange: expect.any(Function),
        });
    });

    test('Debe cambiar el nombre del formulario', () => {
        const newValue = 'Juan';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } })
        });

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
    });

    test('Debe realizar el reset del formulario', () => {
        const newValue = 'Juan';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    });

});