import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>Qus 1. Difference between authorization and authentication</h2>
            <p>Authorization : Authentication works through passwords, one-time pins, biometric information <br />Authentication is visible to and partially changeable by the user. </p>
            <p>Authentication : Authorization works through settings that are implemented and maintained by the organization. <br /> Authorization works through settings that are implemented and maintained by the organization. </p>

            <div>
                <h2>Qus 2. Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p>Firebase is used for many purposes that can help your apps to develop, grow and make it a quality app.</p>
                <p>1. Token-based authentication <br /> 2.Certificate-based authentication <br /> 3. Biometric authentication </p>
            </div>

            <div>
                <h2>Qus : 3. What other services does firebase provide other than authentication</h2>
                <p> * Firebase to help take your mobile app development a notch higher.
                    <br />
                    * backend as a service (BaaS) <br />
                    * Firebase Dynamic Links reference link for more details and set up. <br />

                </p>
            </div>

        </div>
    );
};

export default Blogs;