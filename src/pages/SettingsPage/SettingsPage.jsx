import React from 'react';
import { useForm } from 'react-hook-form';
import { useSettings } from '../../context/SettingsContext';
import Button from '../../components/Button/Button';
import './SettingsPage.css';

const SettingsPage = ({ onSettingsSave }) => {
    const { settings, updateSettings } = useSettings();
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            boardSize: settings.boardSize.toString(),
        }
    });

    const onSubmit = (data) => {
        updateSettings({ boardSize: parseInt(data.boardSize, 10) });
        onSettingsSave();
    };

    return (
        <div className="page-container settings-page">
            <h2>Налаштування гри</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="settings-form">
                <div className="form-group">
                    <label htmlFor="boardSize">Розмір поля:</label>
                    <select id="boardSize" {...register("boardSize")}>
                        <option value="3">3x3 (Легко)</option>
                        <option value="4">4x4 (Нормально)</option>
                        <option value="5">5x5 (Складно)</option>
                    </select>
                </div>
                {errors.boardSize && <p className="error-message">Це поле є обов'язковим</p>}

                <Button type="submit">Зберегти</Button>
            </form>
        </div>
    );
};

export default SettingsPage;
