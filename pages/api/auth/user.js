async function handler(req, res) {
    const data = req.body;

    const DB_ENDPOINT = `${process.env.PATE_DDB_ENDPOINT}/users`;
    const DANO = true;
    if (DANO) {
        const response = {
            lastName: 'Colombo',
            residence: {
                stateProv: 'GA',
                city: 'Columbus',
                street: '2304 Leah Drive',
                postalCode: '31909',
            },
            profile: true,
            affiliations: {
                options: [
                    {
                        value: 'CRP8',
                        label: 'CR P8 Rallies',
                    },
                    {
                        label: 'FES Testing',
                        role: 'guest',
                        region: 'us#test#south#tt',
                        value: 'FEO',
                    },
                ],
                active: {
                    label: 'CR P8 Rallies',
                    divisionId: '271a8cbb-15b4-4f90-ba9f-a5d348206493',
                    region: 'us#east#south',
                    value: 'CRP8',
                },
            },
            email: 'danocolombo@gmail.com',
            uid: '2500b1de-1b8a-4943-9d7f-384783d90400',
            firstName: 'Dano',
            role: 'rep',
            affiliate: {
                name: 'Wynnbrook Church',
                stateProv: 'GA',
                city: 'Columbus',
            },
            username: 'dcolombo',
            region: 'us#east#south#ga',
            stateRep: 'GA',
            phone: '7066042494',
            isLoggedIn: true,
        };
        res.status(200).json({ data: response });
    } else {
        try {
            console.log('U9');
            await fetch(DB_ENDPOINT, {
                method: 'POST',
                body: JSON.stringify({
                    operation: 'getUser',
                    payload: {
                        uid: req.body,
                    },
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    const dbUser = data?.body?.Items[0];
                    console.log(
                        '^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^'
                    );
                    console.log('data:\n', data);
                    console.log(
                        '^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^'
                    );
                    res.status(200).json({ data: { dbUser: dbUser } });
                })
                .catch((error) => {
                    console.log('on SNAP:', error);
                });
        } catch (error) {
            res.status(400).json({
                message: 'Error fetching registrations',
                errorMessage: error.message,
            });
        }
    }
    return;
}
export default handler;
