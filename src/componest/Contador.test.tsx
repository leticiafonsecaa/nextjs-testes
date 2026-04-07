import { render, screen } from "@testing-library/react"
import { Contador } from "./Contador"

describe("Contador", () => {
    it("Renderizar o componente Contador com valor igual a 0", () => {
        render(<Contador />)
        expect(screen.getByText('Contador: 0')).toBeInTheDocument
    })
})

// O teste acima verifica se o componente Contador é renderizado corretamente com o valor inicial de 0. Ele utiliza a função render do @testing-library/react para renderizar o componente e a função getByText para verificar se o texto "Contador: 0" está presente no documento.
// toBeInTheDocument é uma função do jest-dom que verifica se um elemento está presente no documento. Se o elemento estiver presente, o teste passará; caso contrário, ele falhará.