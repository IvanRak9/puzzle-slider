import React from 'react';
import { useForm } from 'react-hook-form';
import { useSettings } from '../../context/SettingsContext';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

const SettingsPage = () => {
    const { settings, updateSettings } = useSettings();
    const navigate = useNavigate();
    const { userId } = useParams();

    const { register, handleSubmit } = useForm({
        defaultValues: {
            boardSize: settings.boardSize.toString(),
        }
    });

    const onSubmit = (data) => {
        updateSettings({ boardSize: parseInt(data.boardSize, 10) });
        navigate(`/user/${userId}/game`);
    };

    return (
        <div className="w-full max-w-md mx-auto text-center bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Налаштування гри</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <div className="text-left">
                    <label htmlFor="boardSize" className="block mb-2 font-medium text-slate-700">Розмір поля:</label>
                    <select
                        id="boardSize"
                        {...register("boardSize")}
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    >
                        <option value="3">3x3 (Легко)</option>
                        <option value="4">4x4 (Нормально)</option>
                        <option value="5">5x5 (Складно)</option>
                    </select>
                </div>

                <div className="flex flex-col gap-3">
                    <Button type="submit">Зберегти і грати</Button>
                    {   }
                    <Link to="/" className="text-slate-500 hover:text-slate-800 transition">
                        Повернутись до меню
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default SettingsPage;

