



export default function HeaderComponent() {
    return (
        <header >
            <div className="flex  md:justify-end justify-center items-center pt-5 md:pr-20 bg-primary">
                    <a href="#">
                        <img src="/images/logo.png" className="object-contain object-center h-7 md:h-12 w-auto" alt="" />
                    </a>
            </div>
        </header>
    );
}

