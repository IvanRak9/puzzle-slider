import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { setBoardSize } from '../../store/slices/settingsSlice';

const SettingsPage = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const boardSize = useSelector((state) => state.settings.settings.boardSize);

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            boardSize: boardSize,
        },
    });

    useEffect(() => {
        reset({ boardSize: boardSize });
    }, [boardSize, reset]);

    const onSubmit = (data) => {
        dispatch(setBoardSize(data.boardSize));
        alert('Налаштування збережено!');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Налаштування</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                        <label htmlFor="boardSize" className="block text-lg font-medium text-gray-700 mb-2">
                            Розмір поля
                        </label>
                        <select
                            id="boardSize"
                            {...register('boardSize')}
                            className="w-full px-4 py-2 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        >
                            <option value="3">3x3 (Легко)</option>
                            <option value="4">4x4 (Нормально)</option>
                            <option value="5">5x5 (Складно)</option>
                        </select>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button type="submit" variant="primary" fullWidth>
                            Зберегти
                        </Button>
                        <Link to={`/user/${userId}`} className="w-full">
                            <Button variant="secondary" fullWidth>
                                Назад
                            </Button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SettingsPage;

