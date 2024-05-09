"use client";
import emailjs from "emailjs-com";
import React, { useState } from "react";
import SellNav from "../components/sellNav";
import { PhotoIcon } from "@heroicons/react/24/solid";
/////////////////////////////////////////////////////////////////
const ContactPage = () => {
  const [Nom, setNom] = useState("");
  const [Numero, setNumero] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [Email, setEmail] = useState("");
  const [Type, setType] = useState("");
  const [Annee, setAnnee] = useState("");
  const [Prix, setPrix] = useState("");
  const [Commentaire, setCommentaire] = useState("");
  const [imageUrl, setImageUrl] = useState('');
  const [statueMachine, setStatueMachine] = useState("");
/////////////////////////////////////////////////////////////////
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const serviceId = "service_wnema2c";
    const templateId = "template_fy7ztu6";
  
    try {
      const emailData = {
        Nom: Nom,
          Numero: Numero,
          Prenom: Prenom,
          Email: Email,
          Type: Type,
          Annee: Annee,
          Prix: Prix,
          StatueMachine: statueMachine,
          Commentaire: Commentaire,
          imageUrl: imageUrl,
      };
  
      const response = await emailjs.send(serviceId, templateId, emailData, 'JPVC2pgKwHmxjZV6K');
  
      console.log('Email sent successfully!', response);
  
      setNom("");
      setNumero("");
      setPrenom("");
      setEmail("");
      setType("");
      setAnnee("");
      setPrix("");
      setCommentaire("");
      setStatueMachine("");
      setFille(null);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

/////////////////////////////////////////////////////////////////
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ml_default');
    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/dfnxagwsr/image/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };
  const handleFileSelect = async (e) => {
    const url = await handleImageUpload(e);
    if (url) setImageUrl(url);
  };
/////////////////////////////////////////////////////////////////
  return (
    <div className="container mx-auto px-4 py-5">
      <SellNav />
      <h1 className="text-[30px] font-bold mt-[100px] mb-[50px]  text-center">
        Buy And Sell
      </h1>
      <form action="#" method="POST" className="mx-auto max-w-xl" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="nom-de-entreprise"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nom de l’entreprise
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                value={Nom}
                onChange={(e) => setNom(e.target.value)}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="numero-de-tel"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Numero de tel
            </label>
            <div className="mt-2.5">
              <input
                type="tel"
                name="last-name"
                id="last-name"
                value={Numero}
                onChange={(e) => setNumero(e.target.value)}
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="prénom"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Prénom
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                value={Prenom}
                onChange={(e) => setPrenom(e.target.value)}
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="type-de-machine"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Type de machine
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="Type"
                id="Type"
                value={Type}
                onChange={(e) => setType(e.target.value)}
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="type-de-machine"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Année de la machine
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                value={Annee}
                onChange={(e) => setAnnee(e.target.value)}
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="type-de-machine"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Prix
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                value={Prix}
                onChange={(e) => setPrix(e.target.value)}
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="statue-de-machine"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Statue de la machine
            </label>
            <div className="mt-2.5">
              <select
                value={statueMachine}
                onChange={(e) => setStatueMachine(e.target.value)}
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>en marche</option>
                <option>ne marche plus</option>
                <option>à l'arret</option>
                <option>démonté</option>
              </select>
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Ajouter des photos de la machine en attache
            </label>
            <input
              type="file"
              id="image2"
              name="image2"
              onChange={handleFileSelect}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="année-de-machine
"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Laissez un commentaire sur la machine
            </label>
            <div className="mt-2.5">
              <textarea
                value={Commentaire}
                onChange={(e) => setCommentaire(e.target.value)}
                id="about"
                name="about"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <button type="submit" className="butn butn-bg">
            <span> SUBMIT </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
