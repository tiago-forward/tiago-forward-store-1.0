"use client";

import { useState } from "react"

export default function Checkout() {
    const [step, setStep] = useState(1) // Gerencia a etapa atual
    const [email, setEmail] = useState("") // Armazena o email
    const [cep, setCep] = useState("") // Armazena o CEP
    const [address, setAddress] = useState({
        street: "",
        number: "",
        city: "",
        state: "",
    }) // Armazena o endereço do cliente
    const [freight, setFreight] = useState(0) // Armazena o valor do frete

    // Função para buscar o endereço pelo CEP (Usando API externa)
    async function fetchAddress(cep: string) {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const data = await response.json()
            setAddress({
                street: data.logradouro,
                number: "",
                city: data.localidade,
                state: data.uf,
            })
        } catch (error) {
            console.error("Erro ao buscar endereço:", error)
        }
    }

    const nextStep = () => setStep(step + 1);

    const prevStep = () => setStep(step - 1);

    return (
        <div className="max-w-4xl mx-auto p-4 h-[50vh]">
            {/* <h1 className="text-2xl font-bold mb-4">Checkout</h1> */}
            {step === 1 && (
                <div>
                    <h2 className="text-xl font-semibold mb-2">Dados de Contato</h2>
                    <label htmlFor="email" className="block text-sm font-medium">
                        E-mail
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Insira seu e-mail"
                        className="border p-2 w-full mb-4"
                    />
                    <button
                        onClick={nextStep}
                        className="bg-pink-500 text-white py-2 px-4 rounded"
                    >
                        Continuar
                    </button>
                </div>
            )}

            {step === 2 && (
                <div>
                    <h2 className="text-xl font-semibold mb-2">Entrega</h2>
                    <label htmlFor="cep" className="block text-sm font-medium">
                        CEP
                    </label>
                    <input
                        type="text"
                        id="cep"
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                        placeholder="Digite seu CEP"
                        className="border p-2 w-full mb-4"
                    />
                    <button onClick={prevStep} className="mr-2 py-2 px-4 rounded">
                        Voltar
                    </button>
                    <button
                        onClick={() => {
                            fetchAddress(cep)
                            nextStep()
                        }}
                        className="bg-pink-500 text-white py-2 px-4 rounded"
                    >
                        Continuar
                    </button>
                </div>
            )}

            {step === 3 && (
                <div>
                    <h2 className="text-xl font-semibold mb-2">Endereço</h2>
                    <label htmlFor="street" className="block text-sm font-medium">
                        Rua
                    </label>
                    <input
                        type="text"
                        id="street"
                        value={address.street}
                        onChange={(e) =>
                            setAddress({ ...address, street: e.target.value })
                        }
                        placeholder="Rua"
                        className="border p-2 w-full mb-4"
                    />

                    <label htmlFor="number" className="block text-sm font-medium">
                        Número
                    </label>
                    <input
                        type="text"
                        id="number"
                        value={address.number}
                        onChange={(e) =>
                            setAddress({ ...address, number: e.target.value })
                        }
                        placeholder="Número"
                        className="border p-2 w-full mb-4"
                    />

                    <label htmlFor="city" className="block text-sm font-medium">
                        Cidade
                    </label>
                    <input
                        type="text"
                        id="city"
                        value={address.city}
                        onChange={(e) =>
                            setAddress({ ...address, city: e.target.value })
                        }
                        placeholder="Cidade"
                        className="border p-2 w-full mb-4"
                    />

                    <label htmlFor="state" className="block text-sm font-medium">
                        Estado
                    </label>
                    <input
                        type="text"
                        id="state"
                        value={address.state}
                        onChange={(e) =>
                            setAddress({ ...address, state: e.target.value })
                        }
                        placeholder="Estado"
                        className="border p-2 w-full mb-4"
                    />

                    <button onClick={prevStep} className="mr-2 py-2 px-4 rounded">
                        Voltar
                    </button>
                    <button onClick={nextStep} className="bg-pink-500 text-white py-2 px-4 rounded">
                        Continuar
                    </button>
                </div>
            )}

            {step === 4 && (
                <div>
                    <h2 className="text-xl font-semibold mb-2">Pagamento</h2>
                    <p className="mb-4">Resumo do pedido:</p>
                    <ul>
                        <li>E-mail: {email}</li>
                        <li>Endereço: {`${address.street}, ${address.number}`}</li>
                        <li>Cidade: {`${address.city}, ${address.state}`}</li>
                        <li>Frete: R$ {freight}</li>
                    </ul>
                    <button onClick={prevStep} className="mr-2 py-2 px-4 rounded">
                        Voltar
                    </button>
                    <button
                        onClick={() => alert("Compra Finalizada!")}
                        className="bg-pink-500 text-white py-2 px-4 rounded"
                    >
                        Finalizar Compra
                    </button>
                </div>
            )}
        </div>
    );
}
