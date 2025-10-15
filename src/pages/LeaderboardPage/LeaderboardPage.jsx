import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

const LeaderboardPage = () => {
    const results = useSelector((state) => state.leaderboard.results);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Таблиця Рекордів</h1>

                {results.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left table-auto">
                            <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="px-4 py-3 text-sm font-medium text-gray-600">#</th>
                                <th className="px-4 py-3 text-sm font-medium text-gray-600">Розмір</th>
                                <th className="px-4 py-3 text-sm font-medium text-gray-600">Ходи</th>
                                <th className="px-4 py-3 text-sm font-medium text-gray-600">Час</th>
                            </tr>
                            </thead>
                            <tbody>
                            {results.map((result, index) => (
                                <tr key={result.id} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-3 font-semibold">{index + 1}</td>
                                    <td className="px-4 py-3">{`${result.boardSize}x${result.boardSize}`}</td>
                                    <td className="px-4 py-3">{result.moves}</td>
                                    <td className="px-4 py-3">{result.time}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-center text-gray-500 my-8">Ще немає жодного рекорду. Зіграйте, щоб стати першим!</p>
                )}

                <div className="mt-8 text-center">
                    <Link to="/">
                        <Button variant="primary">На Головну</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LeaderboardPage;
