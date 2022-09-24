import React from 'react';
import './AddGroupBtn.css';
import { AiOutlinePlus } from 'react-icons/ai';

const AddGroupBtn = () => {
    return (
        <div className='addTask'>
            <label htmlFor="addTaskModal" className="addTaskBtn"><AiOutlinePlus className='addTaskBtnIcon'/></label>
        </div>
    );
};

export default AddGroupBtn;