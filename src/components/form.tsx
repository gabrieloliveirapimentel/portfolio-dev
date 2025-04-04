export function Form() {
  return (
    <form className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col gap-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300"
        >
          E-mail
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
          placeholder="Digite seu e-mail"
          required
        />
      </div>
      <div>
        <label
          htmlFor="assunto"
          className="block text-sm font-medium text-gray-300"
        >
          Assunto
        </label>
        <input
          type="text"
          id="assunto"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
          placeholder="Digite o assunto"
          required
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300"
        >
          Mensagem
        </label>
        <textarea
          id="message"
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
          placeholder="Digite sua mensagem"
          required
        ></textarea>
      </div>
    </form>
  );
}
