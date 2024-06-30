import { useState } from "react";
import { Button, Stack } from "react-bootstrap";
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
function App() {
    const [count, setCount] = useState(0);

    return (
        <Container>
            <Stack direction="horizontal" gap="2" className="mb-4">
                <h1 className="me-auto">Budget</h1>
                <Button variant="primary">Add Budget</Button>
                <Button variant="outline-primary">Add Expense</Button>
                <Button variant="primary">Add Budget</Button>
                <Button variant="outline-primary">Add Expense</Button>
            </Stack>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
                    gap: "1rem",
                    alignItem: "flex-start",
                }}
            ></div>
        </Container>
    );
}

export default App;
