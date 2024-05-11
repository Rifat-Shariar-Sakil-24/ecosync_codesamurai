import React, { useState } from 'react';
import STSPage1 from '../components/STSPage1';
import STSPage2 from '../components/STSPage2';
import STSPage3 from '../components/STSPage3';

const STSPage = () => {

    const [stsPage,setStsPage] = useState(1);


    return (
        <div>
            <div className="users-container">
                {stsPage===1 && <STSPage1 setStsPage={setStsPage}/>}
                {stsPage===2 && <STSPage2 setStsPage={setStsPage}/>}
                {stsPage===3 && <STSPage3 setStsPage={setStsPage}/>}
            </div>
        </div>
    );
};

export default STSPage;