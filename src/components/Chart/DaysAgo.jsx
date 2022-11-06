import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';

const DaysAgo = () => {
    const dispatch = useDispatch();
    const { updateDaysAgo } = bindActionCreators(actionCreators, dispatch);

    return (
        <div className="flex justify-center space-x-3 xs:space-x-4 xs2:space-x-6 lg:space-x-4">
            <button
                className="dark:bg-gray-400  dark:text-gray-50 bg-gray-50 h-10 w-14 focus:border focus:border-blue-500 focus:bg-slate-100 focus:text-blue-500 font-bold font-mono px-3 py-1 rounded-lg shadow-sm hover:border hover:border-blue-500 hover:bg-slate-100 hover:text-blue-500"
                onClick={() => updateDaysAgo('1')}
            >
                1D
            </button>
            <button
                className="dark:bg-gray-400 dark:text-gray-50 bg-gray-50 h-10 w-14 focus:border focus:border-blue-500 focus:bg-slate-100 focus:text-blue-500 font-bold font-mono px-3 py-1 rounded-lg shadow-sm hover:border hover:border-blue-500 hover:bg-slate-100 hover:text-blue-500"
                onClick={() => updateDaysAgo('7')}
            >
                1W
            </button>
            <button
                className="dark:bg-gray-400 dark:text-gray-50 bg-gray-50 h-10 w-14 focus:border focus:border-blue-500 focus:bg-slate-100 focus:text-blue-500 font-bold font-mono px-3 py-1 rounded-lg shadow-sm hover:border hover:border-blue-500 hover:bg-slate-100 hover:text-blue-500"
                onClick={() => updateDaysAgo('30')}
            >
                1M
            </button>
            <button
                className="dark:bg-gray-400 dark:text-gray-50 bg-gray-50 h-10 w-14 focus:border focus:border-blue-500 focus:bg-slate-100 focus:text-blue-500 font-bold font-mono px-3 py-1 rounded-lg shadow-sm hover:border hover:border-blue-500 hover:bg-slate-100 hover:text-blue-500"
                onClick={() => updateDaysAgo('180')}
            >
                6M
            </button>
            <button
                className="dark:bg-gray-400 dark:text-gray-50 bg-gray-50 h-10 w-14 focus:border focus:border-blue-500 focus:bg-slate-100 focus:text-blue-500 font-bold font-mono px-3 py-1 rounded-lg shadow-sm hover:border hover:border-blue-500 hover:bg-slate-100 hover:text-blue-500"
                onClick={() => updateDaysAgo('360')}
            >
                1Y
            </button>
        </div>
    );
};

export default DaysAgo;
