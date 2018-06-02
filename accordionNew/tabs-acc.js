<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Tabs-acc</title>
    <style>
        .accordion-item {
            background-color: crimson;
            color: white;
            cursor: pointer;
            padding: 18px;
            width: 100%;
            border: none;
            font-size: 1.25em;
        }
        .main {
            display: flex;
            padding: 0.25em;
        }
        .main-item {
            padding: 0.25em;
            width: 100%;
        }
        .isActive, .accordion-item:hover {
            background-color: #14DBB3;
        }
        .content.isActive{
            display: block;
        }
        .accordion-item:after {
            content: '\002B';
            color: white;
            font-weight: bold;
            float: right;
            margin-left: 5px;
        }

        .isActive:after {
            content: "\2212";
        }

        .content {
            padding: 0 18px;
            display: none;
            overflow: hidden;
            transition: max-height 0.2s ease-out;
            background-color: #f1f1f1;
        }
    </style>
</head>
<body>

<div class="main" id="accordionTabs">
    <div class="main-item">
        <button class="accordion-item main-item-one">Japan</button>
        <div class="content content-one">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
    <div class="main-item">
        <button class="accordion-item main-item-one">Morocco</button>
        <div class="content content-one">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
    <div class="main-item accordionTabs">
        <button class="accordion-item">Korea</button>
        <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <button class="accordion-item">Australia</button>
        <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <button class="accordion-item">Canada</button>
        <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
    <script src="tabs-acc.js"></script>
    <script>
      var accTabs = new AccordionTabs(accordionTabs);
      accTabs.currentTabId = 2;
     
      accTabs.render();
             </script>

</body>
</html>
