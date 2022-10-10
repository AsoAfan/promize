# CSS Responsive

.course {
display: grid;
grid-template-columns: repeat(5, 1fr);
width: 100%;
/_ column-gap: 12.8rem; _/
row-gap: 4.8rem;
box-shadow: 0.2rem 1.2rem 30rem rgba(47, 46, 65, 15%);
padding: 2.4rem;
border-radius: 11px;
}

.course-info {
display: flex;
flex-direction: column;
gap: 1.4rem;
align-items: center;
}

.img {
/_ border-radius: 50%; _/
width: 7.2rem;
height: 7.2rem;
/_ overflow: hidden; _/
/_ background-image: url(../Img/kindpng_3559027.png);
background-size: cover;
background-position: center; _/
}

/_ .sql {
width: 7.2rem;
} _/

.img img {
width: 100%;
/_ filter: invert(13%) sepia(6%) saturate(3403%) hue-rotate(204deg)
brightness(96%) contrast(85%); _/
}

.course-name {
font-size: 1.6rem;
white-space: nowrap;
}

.course-link {
text-decoration: none;
color: inherit;
transition: 0.4s;
border-radius: 9px;
position: relative;
}

.course-container {
text-decoration: none;
color: inherit;
transition: 0.4s;
border-radius: 9px;
/_ position: relative; _/
display: flex;
flex-direction: column;
gap: 1.6rem;
justify-content: center;
align-items: center;
text-align: center;
}

.course-container:hover {
/_ transform: translateY(-10px); _/
}

.course-container:hover .course-link {
color: var(--main-color);
}

.more {
font-size: 1.3rem;
/_ position: absolute; _/
/_ top: -65%; _/
/_ left: 65%; _/
/_ transform: translateX(-50%); _/
/_ width: 100%; _/
line-height: 1.7;
}

.detail {
display: block;
background-color: #eee;
width: 100%;
/_ height: 100%; _/
/_ position: absolute;
top: -100%;
left: 8%; _/
padding: 1.2rem;
border-radius: 9px;
/_ box-shadow: 0 0 2rem rgb(0 0 0 / 30; _/
/_ display: none; _/
/_ opacity: 0; _/
/_ visibility: hidden; _/
transition: 0.4s;
cursor: default;
}

.detail p {
cursor: text;
text-transform: capitalize;
}

.course-container:hover .detail {
color: #333;
opacity: 1;
visibility: visible;
}

\*/
