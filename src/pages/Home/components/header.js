const Header = () => {
    return (
        <header class="d-flex flex-wrap justify-content-center py-3 border-bottom bg-dark">
            <a href="https://FlyingShuriken.codes" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-light text-decoration-none border border-dark mx-3 top-nav">
                <span class="fs-4 text-decoration-none">FlyingShuriken.codes</span>
            </a>
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <button class="dropdown-toggle nav-link text-light" type="button" id="dropdownMenuProducts" data-bs-toggle="dropdown" aria-expanded="false">Products</button>
                    <ul class="dropdown-menu mx-0 shadow" aria-labelledby="dropdownMenuProducts">
                        <li>
                            <a class="dropdown-item d-flex gap-2 align-items-center" href="https://sapsnkra.flyingshuriken.codes">
                                <i class="bi bi-card-checklist"></i>
                                SAPSNKRA wrapped
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item d-flex gap-2 align-items-center" href="https://url.flyingshuriken.codes">
                                <i class="bi bi-code-slash"></i>
                                Url Shortener
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item d-flex gap-2 align-items-center" href="https://lol.flyingshuriken.codes">
                                <i class="bi bi-file-earmark-bar-graph"></i>
                                LOL SG Stats
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item"><a href="https://github.com/FlyingShuriken" class="nav-link text-light">Github</a></li>
            </ul>
        </header>
    )
}

export default Header;