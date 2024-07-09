"use client";
import React, { useState } from "react";
import axios from "axios";
import { Spacer, Button, ModalFooter, useDisclosure, Input, Autocomplete, AutocompleteItem, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { IoMail, IoPerson, IoSchool, IoCard, IoList } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";
import { RiPhoneFill } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormIngresso() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [nameTouched, setNameTouched] = useState(false);
    const [institutionTouched, setInstitutionTouched] = useState(false);
    const [cpfTouched, setCpfTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [phoneTouched, setPhoneTouched] = useState(false);
    const [categoryTouched, setCategoryTouched] = useState(false);

    const [name, setName] = useState("");
    const [institution, setInstitution] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [category, setCategory] = useState<any>("");

    const categories = [
        { value: "DISCENTE", label: "Discente" },
        { value: "BOLSISTA", label: "Bolsista" },
        { value: "TÉCNICO ADMINISTRATIVO", label: "Técnico Administrativo" },
        { value: "DOCENTE", label: "Docente" },
        { value: "OUTROS", label: "Outros" },
    ];

    const formatCPF = (value: string) => {
        const cleaned = value.replace(/\D/g, "");
        const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})$/);
        if (match) {
            const formatted = !match[2] ? match[1] : `${match[1]}.${match[2]}` + (match[3] ? `.${match[3]}` : "") + (match[4] ? `-${match[4]}` : "");
            return formatted;
        }
        return value;
    };

    const formatPhone = (value: string) => {
        const cleaned = value.replace(/\D/g, "");
        const match = cleaned.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
        if (match) {
            const formatted = !match[2] ? match[1] : `(${match[1]}) ${match[2]}` + (match[3] ? `-${match[3]}` : "");
            return formatted;
        }
        return value;
    };

    // Função para validar o formato do e-mail
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleShowSuccess = (message: string) => {
        toast.success(message);
    };

    const handleShowDanger = (message: string) => {
        toast.error(message);
    };

    const handleSubmit = async () => {
        // const isCpfValid = cpfValidator.isValid(cpf);
        const isEmailValid = validateEmail(email);

        // if (name && institution && isCpfValid && isEmailValid && formatPhone(phone).length > 14 && category) {
        //     try {
        //         const response = await axios.post("http://localhost:5008/addUsuario", {
        //             NOME: name,
        //             INSTITUICAO: institution,
        //             CPF: cpf,
        //             EMAIL: email,
        //             TELEFONE: phone,
        //             CATEGORIA: category, // Assuming label is the required format
        //         });
        //         if (response) {
        //             handleShowSuccess("Cadastro realizado com sucesso!");
        //             setName("");
        //             setInstitution("");
        //             setCpf("");
        //             setEmail("");
        //             setPhone("");
        //             setCategory("");
        //         }
        //     } catch (error) {
        //         handleShowDanger("Ocorreu um erro ao realizar o cadastro, tente novamente");
        //     }
        // } else {
        //     setNameTouched(true);
        //     setInstitutionTouched(true);
        //     setCpfTouched(true);
        //     setEmailTouched(true);
        //     setPhoneTouched(true);
        //     setCategoryTouched(true);
        // }
    };

    const onSelectionChange = (id: any) => {
        setCategory(id);
    };

    return (
        <Card className="max-w-md mx-auto p-6">
            <CardHeader className="flex justify-center text-[25px] font-[600]">Garanta já seu ingresso!</CardHeader>
            <CardBody className="space-y-2">
                <Input
                    className="py-1"
                    classNames={{
                        label: "text-[15px]",
                        input: ["text-[15px] "],
                    }}
                    autoFocus
                    label="NOME"
                    variant="bordered"
                    value={name}
                    maxLength={200}
                    onChange={(e: any) => setName(e.target.value)}
                    onBlur={() => setNameTouched(true)}
                    endContent={<IoPerson className="pointer-events-none flex-shrink-0" />}
                    errorMessage={name || !nameTouched ? "" : "Nome é obrigatório"}
                    isInvalid={name || !nameTouched ? false : true}
                />

                <Input
                    className="py-1"
                    classNames={{
                        label: "text-[15px]",
                        input: ["text-[15px] "],
                    }}
                    label="CPF"
                    variant="bordered"
                    maxLength={14}
                    value={formatCPF(cpf)}
                    onChange={(e: any) => setCpf(e.target.value)}
                    onBlur={() => setCpfTouched(true)}
                    endContent={<FaAddressCard className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                    // errorMessage={(cpf && cpfValidator.isValid(cpf)) || !cpfTouched ? "" : "CPF é obrigatório e deve ser válido"}
                    // isInvalid={(cpf && cpfValidator.isValid(cpf)) || !cpfTouched ? false : true}
                />
                <Input
                    className="py-1"
                    classNames={{
                        label: "text-[15px]",
                        input: ["text-[15px] "],
                    }}
                    label="E-MAIL"
                    variant="bordered"
                    value={email}
                    maxLength={200}
                    onChange={(e: any) => setEmail(e.target.value)}
                    onBlur={() => setEmailTouched(true)}
                    endContent={<IoMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                    errorMessage={email && validateEmail(email) ? "" : "Email é obrigatório e deve ser válido"}
                    isInvalid={email && validateEmail(email) ? false : true}
                />
                <Input
                    className="py-1"
                    classNames={{
                        label: "text-[15px]",
                        input: ["text-[15px] "],
                    }}
                    label="TELEFONE"
                    variant="bordered"
                    maxLength={15}
                    value={formatPhone(phone)}
                    onChange={(e: any) => setPhone(e.target.value)}
                    onBlur={() => setPhoneTouched(true)}
                    endContent={<RiPhoneFill className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                    errorMessage={(formatPhone(phone).length > 14 && phone) || !phoneTouched ? "" : <p className="text-[15px]">Telefone é obrigatório!</p>}
                    isInvalid={(formatPhone(phone).length > 14 && phone) || !phoneTouched ? false : true}
                />
            </CardBody>
            <CardFooter className="flex flex-col">
                <Button color="success" onClick={handleSubmit} className="text=[25px]  text-white">
                    IR PARA PAGAMENTO
                </Button>
                <p className="text-center mt-3 w-full text-[600]">Apenas uma compra por CPF. Se já houver um pagamento por esse CPF, ele irá avisar.</p>
            </CardFooter>

            <ToastContainer />
        </Card>
    );
}
