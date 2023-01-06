import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .flexgrow-fix { /* Fix pra arrumar o Layout! */
        flex-grow: 1;
    }
`;

interface PropsHeader{
    isScrolling:boolean
}

export const LogoAndWatchingName = styled.div<PropsHeader>`
    z-index: 1;
    flex-grow: 1;

    .name-watching {
        margin: 2.2rem 0 0 0;
    }

    .name-watching h2 {
        color: white;
        font-family: 'Noto Sans', sans-serif;
        font-size: 2.3rem;
    }

    .logo {
        margin: 2rem 0;
        justify-content: center;
        display: flex;

        .image-logo {
            position: ${({isScrolling}) => isScrolling?`fixed`:`static`};
            width: 135px;
            height: 22px;
        }
    }


    @media (max-width: 940px) {
        .logo {
            margin: 2rem 0 3rem;
        }

        .name-watching h2 {
            text-align: center;
            font-size: 1.4rem;
        }
    }
`;

export const ProfileAccount = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .profile {
        cursor: pointer;
        transition: 0.2s;
        margin: 0 1.1rem 0 1.1rem;

        .name-profile {
            font-weight: 200;
            font-size: 1rem;
            color: white;
            font-family: 'Roboto', sans-serif;
            text-align: center;
        }

        .image-profile {
            transform: scale(0.9);
            background-color: greenyellow;
            border-radius: 100%;
            border: 5px solid green;
        }
    }

    .profile:hover {
        transform: scale(1.150);
    }

    @media (max-width: 940px) {
        margin: 1rem;

        .profile {
            margin: 1rem 2rem;
        }
    }
`;

export const ManageProfile = styled.div`

    .profile-manager-text {
        font-size: 0.8rem;
        cursor: pointer;
        font-weight: 500;
        font-family: 'Roboto', sans-serif;
        border-radius: 0.3rem;
        padding: 0.7rem 0.9rem;
        text-transform: uppercase;
        margin: 1rem 0 1.2rem 0;
        color: white;
    }

    .profile-manager-text:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;