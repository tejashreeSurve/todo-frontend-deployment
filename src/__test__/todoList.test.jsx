import { render,screen } from "@testing-library/react"
import App from "../App";
import userEvent from "@testing-library/user-event";

descibe("Todo functional requirement", () => {
    test("load todos from list and display", async () => {
        render(<App />);

        const todo = await findByText("Study");
        expect(todo).toBeInTheDocument();
    })

    test('Add new todo', async () => {
        const user = userEvent.setup();
        render(<App />);
        await findByText("Study");

        const input = screen.getByRole("textbox");
        const addButton = screen.getByRole("button", { name: /add/i });

        await user.type(input, "Pray");
        await user.click(addButton);

        const newTodo = await screen.findByText('Pray');
        expect(newTodo).toBeInTheDocument();

        expect(input).toHaveValue("");
    });

    test('does not add todo when input is empty', async () => {
        const user = userEvent.setup();
        render(<App />);

        await screen.findByText('Study');

        const addButton = screen.getByRole('button', { name: /add/i });

        expect(addButton).toBeDisabled();
    });

    test('deletes a todo', async () => {
        const user = userEvent.setup();
        render(<App />);

        const todo = await screen.findByText('Study');
        expect(todo).toBeInTheDocument();

        const deleteButton = screen.getByRole('button', { name: /delete/i });
        await user.click(deleteButton);

        expect(todo).not.toBeInTheDocument();

    })

})