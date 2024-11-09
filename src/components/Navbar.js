import React from "react";
import { Link } from "react-router-dom";
import ProfileModal from "./ProfileModal";
export default function Navbar() {
  return (
    <>
      <div>
        <nav
          class="navbar navbar-expand-lg bg-body-tertiary"
          style={{ fontFamily: "Futura, Arial, sans-serif" }}
        >
          <div
            class="container-fluid d-flex"
            style={{ justifyContent: "space-between", alignItems: "end" }}
          >
            <div>
              <button
                class="navbar-toggler mb-4"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul
                  class="navbar-nav me-auto mb-lg-0"
                  style={{ fontSize: "22px" }}
                >
                  <li class="nav-item mx-2">
                    <a
                      class="nav-link active"
                      aria-current="page"
                      href="/"
                      style={{ fontWeight: "bold" }}
                    >
                      Home
                    </a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link active" aria-current="page" href="/">
                      Men
                    </a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link active" aria-current="page" href="/">
                      Women
                    </a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link active" aria-current="page" href="/">
                      Kids
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="my-2" style={{ textAlign: "center" }}>
              <img
                style={{
                  height: "90px",
                  width: "180px",
                  backgroundSize: "cover",
                }}
                src="./vw2.png"
                alt="img"
              />
            </div>
            <div className="mb-2">
              <form class="d-flex align-items-center " role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ backgroundColor: "lightgrey" }}
                />
                <span>
                  <svg
                  style={{ color: "black", height: "32px", cursor: "pointer" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 mx-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                </span>
                
                <Link to="/login" data-bs-toggle="modal" data-bs-target="#profileModal">
                  <svg
                  style={{ color: "black", height: "32px", cursor: "pointer" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                </Link>
                <Link to="/likepage">
                   <svg style={{ color: "black", height: "32px", cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

                </Link>
               
              <Link to="/cart" >
                <svg
                  style={{ color: "black", height: "32px", cursor: "pointer" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              
              </Link>
               
              </form>
            </div>
          </div>
        </nav>
      </div>
      <ProfileModal/>
    </>
  );
}
