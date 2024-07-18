let users = [
    {
        id: 1,
        username: 'amin01',
        Name: 'amin',
        family: 'sorabi',
        cardNumber: '6037 7923 1006 5088',
        internet: [
            { value: 70, deadline: 70 },
            { value: 30, deadline: 10 }
        ],
        mySharg: [20000, 180000, 20000],
        sendSharg: [510000, 110000, 160000],
        recieveSharg: [820000, 660000, 50000],
        phoneNumber: '09021234567',
        password: '1111',
        balance: 1812070,
        inComes: 0,
        outComes: 0,
    },
    {
        id: 2,
        username: 'ali01',
        Name: 'ali',
        family: 'karimi',
        cardNumber: '6037 4599 9120 5415',
        internet: [
            { value: 70, deadline: 70 },
            { value: 30, deadline: 10 }
        ],
        mySharg: [50000, 130000, 120000],
        sendSharg: [50000, 130000, 120000],
        recieveSharg: [50000, 130000, 120000],
        phoneNumber: '09211234567',
        password: '2222',
        balance: 1450000,
        inComes: 0,
        outComes: 0,
    },
    {
        id: 3,
        username: 'tornado',
        Name: 'mmd',
        family: 'amin pour',
        cardNumber: '6037 7171 5201 7099',
        internet: [
            { value: 70, deadline: 70 },
            { value: 30, deadline: 10 }
        ],
        mySharg: [80000, 330000, 220000],
        sendSharg: [50000, 610000, 740000],
        recieveSharg: [550000, 340000, 1000],
        phoneNumber: '09151111111',
        password: '0000',
        balance: 1000000,
        inComes: 0,
        outComes: 0,
    }
]


let menu = document.querySelector('menu')
let header = document.querySelector('header')
let headerDate = document.querySelector('.header-right__date')
let main = document.querySelector('main')
let menuBtn = document.querySelector('.header-hambergerMenu')
let closeBtn = document.querySelector('.closeBtn')
let defaultSelectBtn = document.querySelector('.movements-defaultSelect')
let movSelectList = document.querySelector('.movements-selectList')
let registercontainer = document.querySelector('.register')
let logincontainer = document.querySelector('.login')
let goToRegisterBtn = document.querySelector('.goToRegisterBtn')
let goToLoginBtn = document.querySelector('.goToLoginBtn')
let registerBtn = document.querySelector('.registerBtn')
let loginBtn = document.querySelector('.loginBtn')
let loginPhoneNumber = document.querySelector('.login-phoneNumber')
let loginPasword = document.querySelector('.login-pasword')
let loginRegisterContainer = document.querySelector('.loginRegister-container')
let usernameElem = document.querySelector('.header-right__username')
let nameElem = document.querySelector('.menu-account__name')
let familyElem = document.querySelector('.menu-account__family')
let balanceValue = document.querySelector('.balance-value')
let inComesValue = document.querySelector('.inComes-value')
let outComesValue = document.querySelector('.outComes-value')
let cardNumber = document.querySelector('.cardNumber')
let message = document.querySelector('.message')
let forgetPassword = document.querySelector('.forgetPassword')
let forgetPasswordBtn = document.querySelector('.forgetPasswordBtn')
let sendPasswordBtn = document.querySelector('.sendPasswordBtn')
let forgetUsernameInput = document.querySelector('.forgetPassword-username')
let forgetPhoneNumberInput = document.querySelector('.forgetPassword-phoneNumber')
let messageTitle = document.querySelector('.message-title')
let messageSubTitle = document.querySelector('.message-subTitle')
let registerForm = document.querySelector('.register-form')
let loginForm = document.querySelector('.login-form')
let forgetPasswordForm = document.querySelector('.forgetPassword-form')
let logOutMessage = document.querySelector('.logOut-message')
let logOut_yesBtn = document.querySelector('.logOut-message__yesBtn')
let logOut_NoBtn = document.querySelector('.logOut-message__NoBtn')
let BarChart = document.querySelector('#BarChart');
let DoughnutChart = document.querySelector('#DoughnutChart')
let headerTheme = document.querySelector('.header-theme')
let registerUsername = document.querySelector('.register-username')
let registerName = document.querySelector('.register-name')
let registerFamily = document.querySelector('.register-family')
let registerPhoneNumber = document.querySelector('.register-phoneNumber')
let registerCardNumber = document.querySelector('.register-cardNumber')
let registerPassword = document.querySelector('.register-pasword ')
let shrgeContainer = document.querySelector('.shrge-bg')
let shrgeInput = document.querySelector('.shrge-input')
let hamralAvalImg = document.querySelector('.hamralAval')
let irancelImg = document.querySelector('.irancel')
let textItems = document.querySelectorAll('.suggestion-textItem')
let rightgelImg = document.querySelector('.rightgel')
let operatiosCharge = document.querySelector('.operatios-charge')
let shrgePin = document.querySelector('.shrge-selectBar__pin')
let shrgeDirect = document.querySelector('.shrge-selectBar__Direct')
let shrgeSelection = document.querySelector('.shrge-selectBar__selection')
let shrgeBuy = document.querySelector('.shrge-buy')
let Sh5 = document.querySelector('.Sh5')
let Sh10 = document.querySelector('.Sh10')
let Sh20 = document.querySelector('.Sh20')
let Sh50 = document.querySelector('.Sh50')
let Sh100 = document.querySelector('.Sh100')
let desiredItem = document.querySelector('.desired-textItem')
let movementsContainer = document.querySelector('.movements-container')
let shrgeDesired = document.querySelector('.shrge-desired')
let desiredInput = document.querySelector('.desired__input')
let desiredBtn = document.querySelector('.desired__btn')
let selectBarpin = document.querySelector('.shrge-selectBar__pin')
let selectBarDirect = document.querySelector('.shrge-selectBar__Direct')
let shrge = document.querySelector('.shrge')





//chart
new Chart(BarChart, {
    type: 'bar',
    data: {
        labels: ['شارژ', 'اینترنت', 'پرداخت قبض', 'کارت به کارت', 'درخواست وام', 'بلیت هواپیما'],
        datasets: [{
            label: 'تراکنش ها در این ماه',
            data: [12, 19, 3, 9, 2, 3],
            borderColor: [
                '#00ffbf',
                '#00c1fc',
                '#ff0000',
                '#fdc600',
                '#a600ff',
                '#ff00a2',
            ],
            backgroundColor: [
                '#D5F8EF',
                '#D8F6FF',
                '#f8d5d5',
                '#FDF3CE',
                '#ecd5f8',
                '#f8d5eb',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


new Chart(DoughnutChart, {
    type: 'line',
    data: {
        labels: ['شارژ', 'اینترنت', 'پرداخت قبض', 'کارت به کارت', 'درخواست وام', 'بلیت هواپیما'],
        datasets: [{
            label: 'تراکنش ها در این ماه',
            data: [12, 19, 3, 9, 2, 3],
            borderColor: [
                '#00ffbf',
                '#00c1fc',
                '#ff0000',
                '#fdc600',
                '#a600ff',
                '#ff00a2',
            ],
            backgroundColor: [
                '#D5F8EF',
                '#D8F6FF',
                '#f8d5d5',
                '#FDF3CE',
                '#ecd5f8',
                '#f8d5eb',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



//menu hemberger
menuBtn.addEventListener('click', () => {
    menu.classList.add('active')
})
closeBtn.addEventListener('click', () => {
    menu.classList.remove('active')
})

//filter movements
defaultSelectBtn.addEventListener('click', () => {
    movSelectList.classList.toggle('active')
})

//login and register
goToLoginBtn.addEventListener('click', () => {
    showLogin()
})
goToRegisterBtn.addEventListener('click', () => {
    showRegister()
})

loginBtn.addEventListener('click', (e) => {
    e.preventDefault()
    login()
    console.log(currentUser);
})


let currentUser = null;
const login = function () {
    currentUser = users.find((user) => {
        return loginPhoneNumber.value === user.phoneNumber && loginPasword.value === user.password
    })

    if (currentUser) {
        console.log(users);
        showUserdata(currentUser)
        succMsg('ورود موفقیت آمیز', 'در حال برگشت به پنل کاربری خود')
        showUserPanel()
        localStorage.setItem('logged', true)
        loginBtn.innerHTML = '<span class="loader"></span>'
        setTimeout(() => {
            loginBtn.innerHTML = 'ورود'
            loginForm.reset()
        }, 5000);
    }
    else {
        errMsg('خطا در اطلاعات ورودی', 'لطفا شماره تلفن یا رمز عبور را درست وارد کنید')
        setTimeout(() => {
            loginForm.reset()
        }, 1000);
    }
}


//register
registerBtn.addEventListener('click', (e) => {
    e.preventDefault()

    let newUser = {
        id: users.length + 1,
        username: registerUsername.value,
        Name: registerName.value,
        family: registerFamily.value,
        phoneNumber: registerPhoneNumber.value,
        cardNumber: registerCardNumber.value,
        password: registerPassword.value,
        balance: 0,
        inComes: 0,
        outComes: 0,
        internet: [],
        mySharg: [],
        sendSharg: [],
        recieveSharg: [],
    }


    if (registerUsername.value.length > 3 && registerName.value && registerFamily.value && registerPhoneNumber.value.length >= 11 && registerPhoneNumber.value.length <= 11 && registerCardNumber.value.length <= 16 && registerCardNumber.value.length >= 16 && registerPassword.value.length >= 4) {
        registerBtn.innerHTML = '<span class="loader"></span>'
        users.push(newUser)
        succMsg('ثبت نام موفقیت آمیز', 'لطفا صبور باشید ، در حال رفتن به صفحه ورود')
        setTimeout(() => {
            showLogin()
            registerForm.reset()
            registerBtn.innerHTML = 'ثبت نام'
        }, 4000);
    }
    else {
        errMsg('خطا در ثبت اطلاعات', 'لطفا تمامی موارد زیر را درست وارد کنید')
    }

})



//forget password
forgetPasswordBtn.addEventListener('click', () => {
    showForgetPassword()
})

let passwordForget = null;
sendPasswordBtn.addEventListener('click', (e) => {
    e.preventDefault()
    passwordForget = users.find((user) => {
        return user.username === forgetUsernameInput.value && user.phoneNumber === forgetPhoneNumberInput.value
    })
    if (passwordForget) {
        sendPasswordBtn.innerHTML = '... در حال رفتن به فرم ورود'
        infoMsg('رمز عبور بازیابی شد', `رمز عبور شما : ${passwordForget.password} . این رمز را در اختیار هیچکس قرار ندهید`)
        setTimeout(() => {
            sendPasswordBtn.innerHTML = 'ارسال'
            forgetPasswordForm.reset()
        }, 11000);
    }
    else {
        errMsg('خطا در دریافت اطلاعات', 'لطفا شماره تلفن و رمز عبور خود را درست وارد نمایید')
        forgetPasswordForm.reset()
    }
})



//show form containers
const showLogin = function () {
    registercontainer.classList.remove('active')
    logincontainer.classList.add('active')
    forgetPassword.classList.remove('active')
}
const showRegister = function () {
    registercontainer.classList.add('active')
    logincontainer.classList.remove('active')
    forgetPassword.classList.remove('active')
}
const showForgetPassword = function () {
    registercontainer.classList.remove('active')
    logincontainer.classList.remove('active')
    forgetPassword.classList.add('active')
}
const showUserPanel = function () {
    setTimeout(() => {
        loginRegisterContainer.classList.remove('active')
    }, 3000);
}



//show type of message
const errMsg = function (title, subtitle) {
    message.classList.add('activeErr')
    setTimeout(() => {
        message.classList.remove('activeErr')
    }, 3000);

    messageTitle.innerHTML = title
    messageSubTitle.innerHTML = subtitle
}

const succMsg = function (title, subtitle) {
    message.classList.add('activeSucc')
    setTimeout(() => {
        message.classList.remove('activeSucc')
        shrgeContainer.classList.remove('active')
        shrgeDesired.classList.remove('active')
    }, 3000);
    messageTitle.innerHTML = title
    messageSubTitle.innerHTML = subtitle
}

const infoMsg = function (title, subtitle) {
    message.classList.add('activeInfo')
    setTimeout(() => {
        message.classList.remove('activeInfo')
        showLogin()
    }, 10000);

    messageTitle.innerHTML = title
    messageSubTitle.innerHTML = subtitle
}




//show user data
const showUserdata = function (mainUser) {
    usernameElem.innerHTML = mainUser.username
    nameElem.innerHTML = mainUser.Name
    familyElem.innerHTML = mainUser.family
    balanceValue.innerHTML = `موجودی : ${mainUser.balance.toLocaleString()} ریال`
    cardNumber.innerHTML = `${mainUser.cardNumber} : شماره کارت`
    inComesValue.innerHTML = mainUser.inComes.toLocaleString()
    outComesValue.innerHTML = mainUser.outComes.toLocaleString()
    myShargMov(mainUser.mySharg)
}


//stay login
let logOut = document.querySelector('.logOut')
let localstorageLogged = null;

localstorageLogged = localStorage.getItem('logged')

window.addEventListener('load', () => {
    if (localstorageLogged === 'true') {
        loginRegisterContainer.classList.remove('active')
    }
    else {
        loginRegisterContainer.classList.add('active')
    }
})



//log out
const logOutAcc = function () {
    localStorage.setItem('logged', false)
    loginRegisterContainer.classList.add('active')
}

logOut.addEventListener('click', () => {
    logOutMessage.classList.add('active')
    hideBody()
})

logOut_yesBtn.addEventListener('click', () => {
    menu.classList.remove('active')
    logOutMessage.classList.remove('active')
    logOutAcc()
    showBody()
})
logOut_NoBtn.addEventListener('click', () => {
    logOutMessage.classList.remove('active')
    showBody()
})


const hideBody = function () {
    menu.style.filter = 'blur(10px)'
    header.style.filter = 'blur(10px)'
    main.style.filter = 'blur(10px)'
}
const showBody = function () {
    menu.style.filter = 'blur(0)'
    header.style.filter = 'blur(0)'
    main.style.filter = 'blur(0)'
}



//theme
// headerTheme.addEventListener('click', () => {

// })



//popular product
$('.owl-carousel').owlCarousel({
    loop: true, // boolean
    margin: 10,
    center: true,
    lazyLoad: true,
    nav: true, // Boolean
    dots: false, // Boolean
    autoplay: false, // Boolean
    autoplayTimeout: 4000, // Number
    center: true, // Boolean
    rtl: true, // Boolean
    smartSpeed: 3000, // Boolean
    items: 1, // Number
    autoWidth: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})


//shrge
let irancel = ['0935', '0936', '0937', '0938', '0939', '0901', '0902', '0903', '0904', '0905'];
let IR_MCI = ['0910', '0911', '0912', '0913', '0914', '0915', '0916', '0917', '0918', '0919', '0990', '0991', '0992', '0993'];
let rightel = ['0921', '0922', '0923'];
let mainirancel = null;
let mainIR_MCI = null;
let mainRightel = null;

const filtered = function () {
    let userNumber = shrgeInput.value

    if (userNumber.length > 3) {
        mainirancel = irancel.some((iran) => userNumber.startsWith(iran))
        mainIR_MCI = IR_MCI.some((mci) => userNumber.startsWith(mci))
        mainRightel = rightel.some((right) => userNumber.startsWith(right))

        if (mainirancel) {
            irancelImg.classList.remove('blured')
            hamralAvalImg.classList.add('blured')
            rightgelImg.classList.add('blured')
        }
        else if (mainIR_MCI) {
            hamralAvalImg.classList.remove('blured')
            irancelImg.classList.add('blured')
            rightgelImg.classList.add('blured')
        }
        else if (mainRightel) {
            rightgelImg.classList.remove('blured')
            irancelImg.classList.add('blured')
            hamralAvalImg.classList.add('blured')
        }
        else {
            hamralAvalImg.classList.add('blured')
            irancelImg.classList.add('blured')
            rightgelImg.classList.add('blured')
        }
    }
    else {
        irancelImg.classList.remove('blured')
        hamralAvalImg.classList.remove('blured')
        rightgelImg.classList.remove('blured')
    }
}

shrgeInput.addEventListener('change', () => {
    filtered()
})

setInterval(() => {
    filtered()
}, 10);


operatiosCharge.addEventListener('click', () => {
    shrgeContainer.classList.add('active')
    shrgeInput.value = ''
    desiredInput.value = ''
    shargAmount = 0
})


let isDirect = true
shrgeDirect.addEventListener('click', () => {
    shrgeSelection.style.transform = 'translateX(0)';
    isDirect = true
})
shrgePin.addEventListener('click', () => {
    shrgeSelection.style.transform = 'translateX(-7.7rem)';
    isDirect = false
})

let userReceive = null;


selectBarDirect.addEventListener('click', () => {
    shrge.classList.remove('active')
})
selectBarpin.addEventListener('click', () => {
    shrge.classList.add('active')
})


shrgeBuy.addEventListener('click', () => {
    if (isDirect) {
        isDirect = false
        let shargePhoneNumber = shrgeInput.value

        if (shargePhoneNumber === currentUser.phoneNumber && currentUser.balance >= shargAmount && shargAmount > 0) {
            currentUser.mySharg.push(shargAmount)
            currentUser.balance = currentUser.balance - shargAmount
            currentUser.outComes = currentUser.outComes + shargAmount
            showUserdata(currentUser)
            succMsg('تراکنش موفقیت آمیز', 'در حال برگشت به پنل کاربری خود')
        }
        else if (shargePhoneNumber !== currentUser.phoneNumber) {
            errMsg('خطا در انجام تراکنش', 'لطفا فقط شماره همراه خود را وارد کنید')
        }
        else if (shargAmount < 1) {
            errMsg('خطا در انجام تراکنش', 'لطفا مقدار شارژ را انتخاب یا وارد کنید')
        }
        else if (currentUser.balance <= shargAmount) {
            errMsg('خطا در انجام تراکنش', 'عدم موجودی کافی')
        }
    }
    else {
        isDirect = true
        infoMsg('لطفا صبور باشید', 'برای استفاده از این قابلیت منتظر آپدیت بعدی باشید')
    }
    console.log(shargAmount);
})



let shargAmount = 0
Sh5.addEventListener('click', () => {
    shargAmount = 50000
    desiredInput.value = ''
    shrgeDesired.classList.remove('active')
})
Sh10.addEventListener('click', () => {
    shargAmount = 100000
    desiredInput.value = ''
    shrgeDesired.classList.remove('active')
})
Sh20.addEventListener('click', () => {
    shargAmount = 200000
    desiredInput.value = ''
    shrgeDesired.classList.remove('active')
})
Sh50.addEventListener('click', () => {
    shargAmount = 500000
    desiredInput.value = ''
    shrgeDesired.classList.remove('active')
})
Sh100.addEventListener('click', () => {
    shargAmount = 1000000
    desiredInput.value = ''
    shrgeDesired.classList.remove('active')
})


desiredItem.addEventListener('click', () => {
    shargAmount = 0
    shrgeDesired.classList.add('active')
    desiredBtn.addEventListener('click', () => {
        shargAmount = Number(desiredInput.value)
    })
})


const myShargMov = function (movs) {
    let shargType = mainIR_MCI ? 'همراه اول' : mainirancel ? 'ایرانسل' : mainRightel ? 'رایتل' : '...'

    movementsContainer.innerHTML = ''
    movs.forEach((mov) => {
        movementsContainer.insertAdjacentHTML('afterbegin', `
        <div class="movements-item sharge">
            <div class="sharge-left">
                <i class='bx bxs-bolt'></i>
            </div>
            <div class="sharge-right">
                <p class="sharge-title title">خرید شارژ</p>
                <p class="sharge-subtitle subTitle">
                    تراکنش شما در تاریخ ${todayText} با مبلغ ${mov.toLocaleString()} ریال شارژ ${shargType} با موفقیت انجام شد
                </p>
            </div>
        </div>`)
    })
}



// const recShargMov = function (movs) {
//     let shargType = mainIR_MCI ? 'همراه اول' : mainirancel ? 'ایرانسل' : mainRightel ? 'رایتل' : '...'

//     movementsContainer.innerHTML = ''
//     movs.forEach((mov) => {
//         movementsContainer.insertAdjacentHTML('afterbegin', `
//         <div class="movements-item sharge">
//             <div class="sharge-left">
//                 <i class='bx bxs-bolt'></i>
//             </div>
//             <div class="sharge-right">
//                 <p class="sharge-title title">خرید شارژ</p>
//                 <p class="sharge-subtitle subTitle">
//                    تراکنش شما در تاریخ ${todayText} با مبلغ ${mov.toLocaleString()} ریال شارژ ${shargType} از طرف ${currentUser.phoneNumber} با موفقیت انجام شد
//                 </p>
//             </div>
//         </div>`)
//     })
// }


// const sendShargMov = function (movs) {
//     let shargType = mainIR_MCI ? 'همراه اول' : mainirancel ? 'ایرانسل' : mainRightel ? 'رایتل' : '...'

//     movementsContainer.innerHTML = ''
//     movs.forEach((mov) => {
//         movementsContainer.insertAdjacentHTML('afterbegin', `
//         <div class="movements-item sharge">
//             <div class="sharge-left">
//                 <i class='bx bxs-bolt'></i>
//             </div>
//             <div class="sharge-right">
//                 <p class="sharge-title title">خرید شارژ</p>
//                 <p class="sharge-subtitle subTitle">
//                    ارسال شارژ در تاریخ ${todayText} با مبلغ ${mov.toLocaleString()} ریال شارژ ${shargType} برای ${userReceive.phoneNumber} با موفقیت انجام شد
//                 </p>
//             </div>
//         </div>`)
//     })
// }



//date
let todayText = '';

const today = function () {
    let now = new Date()
    let year = now.getFullYear()
    let month = `${now.getMonth() + 1}`.padStart(2, 0)
    let day = `${now.getDate()}`.padStart(2, 0)
    let hour = `${now.getHours()}`.padStart(2, 0)
    let minute = `${now.getMinutes()}`.padStart(2, 0)

    return `امروز : ${hour}:${minute}, ${year}/${month}/${day}`
}

setInterval(() => {
    headerDate.innerHTML = today()
}, 10);



