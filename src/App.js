import styled from 'styled-components';

function App() {
    return (
        <MainConatiner>
            <div>Helllooooo!!!</div>
        </MainConatiner>
    );
}

const MainConatiner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    width: 30vw;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 037);
    backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
`;

export default App;
