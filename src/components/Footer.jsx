import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content p-10 mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                <aside>
                    <div className="flex items-center gap-2">
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-accent"
                        >
                            <path d="M22.672 15.226l-2.432.811..." />
                        </svg>
                        <span className="text-lg font-semibold">Store-Parcial</span>
                    </div>
                    <p className="text-sm mt-2">
                        Tu tienda de confianza para encontrar los mejores productos.
                    </p>
                </aside>

                <nav>
                    <h6 className="footer-title">Productos</h6>
                    <a href="/" className="link link-hover">Inicio</a>
                    <a href="/cart" className="link link-hover">Carrito</a>
                    <a href="/#ofertas" className="link link-hover">Ofertas</a>
                    <a href="/#novedades" className="link link-hover">Novedades</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Empresa</h6>
                    <a href="/about" className="link link-hover">Sobre nosotros</a>
                    <a href="/contact" className="link link-hover">Contacto</a>
                    <a href="/jobs" className="link link-hover">Trabaja con nosotros</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a href="/terms" className="link link-hover">Términos de uso</a>
                    <a href="/privacy" className="link link-hover">Política de privacidad</a>
                    <a href="/cookies" className="link link-hover">Cookies</a>
                </nav>
            </div>

            <div className="mt-10 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} MyShop. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
