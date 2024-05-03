import Dropdown from './components/Dropdown';

function App() {
    const options = [
        { label: 'Red', value: 'Red' },
        { label: 'Green', value: 'Green' },
        { label: 'Blue', value: 'Blue' },
        { label: 'Yellow', value: 'Yellow' },
        { label: 'Violet', value: 'Violet' }
    ];

    return <Dropdown options={options} />;
}

export default App;
