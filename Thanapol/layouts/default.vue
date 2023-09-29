<template>
    <div>
        <nav>
            <ul>
                <li class="left"><a href="/">Home</a></li>
                <li class="left"><a href="/about">about</a></li>
                <li class="left"><a href="#contact">Contact</a></li>
                <li class="left"><a href="/limitmessage">Limit Message</a></li>
                <li class="left"><a href="/previewImage">PreviewImage</a></li>
                <li class="left"><a href="/product">Product</a></li>
            </ul>
        </nav>
    </div>
        <footer>
        <h1>Create By Thanapol</h1>    
        </footer>
        <slot />
</template>
<style>
body{
    margin: 0px;
    padding: 0px;
}
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
    }

    .left {
        float: left;
    }

    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    li a:hover {
        background-color: #111;
    }
    footer {
        list-style-type: none;
        bottom: 0;
        width: 100%;
        text-align: center;
        position: fixed;
        background-color: #333;
        color: white;
    }
</style>