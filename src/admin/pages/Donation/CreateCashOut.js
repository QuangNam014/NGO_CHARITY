import { useState } from 'react';

function CreateCashOut({ closeModal, listCategory, listProgram, inforUser }) {
    const [showErrorInput, setShowErrorInput] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedProgram, setSelectedProgram] = useState('');
    const [formData, setFormData] = useState({ money: '' });

    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
        setSelectedProgram('');
    };

    const handleProgramChange = (event) => {
        setSelectedProgram(event.target.value);
    };

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setShowErrorInput(false);
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleBlurInput = (e) => {
        const value = e.target.value;
        if (!value) {
            setShowErrorInput(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (showErrorInput || formData.money === '') {
            return null;
        }

        const dataValue = {
            ...formData,
            user_id: inforUser.id,
            program_id: selectedProgram,
        };
        console.log(dataValue);
        closeModal();
    };

    const selectedCategoryPrograms = listProgram.filter((program) => program.category_Id === parseInt(selectedCategory));
    return (
        <form onSubmit={handleSubmit} method="post">
            <div className="container rounded bg-white  profile__pages_detail--wrapper">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Cash Out</h4>
                </div>
                <div className="row">
                    <div className="col-md-4 border-right">
                        <div>
                            <div className="row mt-2">
                                <div className="col-md-12 text-left">
                                    <label className="profile__pages_detail--labels mt-2">Category:</label>
                                </div>
                                <div className="col-md-12">
                                    <select
                                        className="form-select"
                                        name="category_id"
                                        value={selectedCategory}
                                        onChange={(e) => handleCategoryChange(e.target.value)}
                                    >
                                        <option value="">-- Select Category --</option>
                                        {listCategory.map((category) => (
                                            <option key={category.id} value={category.id}>
                                                {category.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {selectedCategory && (
                        <div className="col-md-4 border-right">
                            <div>
                                <div className="row mt-2">
                                    <div className="col-md-12 text-left">
                                        <label className="profile__pages_detail--labels mt-2">Program:</label>
                                    </div>
                                    <div className="col-md-12">
                                        <select className="form-select" name="category_id" value={selectedProgram} onChange={handleProgramChange}>
                                            <option value="">-- Select Program --</option>
                                            {selectedCategoryPrograms.map((program) => (
                                                <option key={program.id} value={program.id}>
                                                    {program.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {selectedCategory && selectedProgram && (
                        <div className="col-md-4">
                            <div>
                                <div className="row mt-2">
                                    <div className="col-md-12 text-left">
                                        <label className="profile__pages_detail--labels mt-2">Money:</label>
                                    </div>
                                    <div className="col-md-12">
                                        <input
                                            type="number"
                                            min={1}
                                            name="money"
                                            placeholder="Enter Money"
                                            className="form-control profile__pages_detail--form-control"
                                            onChange={handleChangeInput}
                                            onBlur={handleBlurInput}
                                            value={formData.money}
                                        />
                                    </div>
                                    {showErrorInput && (
                                        <p className="text-left" style={{ color: 'red', marginLeft: '5px', marginTop: '-20px' }}>
                                            Money is not empty
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {selectedCategory && selectedProgram && formData.money && (
                    <div className="mt-5 text-center">
                        <button className="btn profile__pages_detail--profile-button" type="submit">
                            Cash Out
                        </button>
                        ,
                    </div>
                )}
            </div>
        </form>
    );
}

export default CreateCashOut;
