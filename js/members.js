
const CacheMemberSNS = new Map();

window.onload = () => {
    Object.keys(members).forEach((key) => {
        /**
         * @type { Array<{ name: string, description: string, icon: string }> }
         */
        const member = members[key]

        Object.keys(members).forEach((key) => {
            const member = members[key];
            member.forEach((m) => {
                if (CacheMemberSNS.get(m.name) === undefined) {
                    CacheMemberSNS.set(m.name, m.sns);
                }
            })
        })

        const containerOfDiv = document.createElement("div");
        containerOfDiv.classList.add("flex", "flex-col", "w-full", "gap-4");

        const title = document.createElement("h1");
        title.classList.add("text-3xl", "font-semibold");
        title.textContent = key;

        const headerLine = document.createElement("div");
        headerLine.classList.add("h-[0.5px]", "bg-red-500", "w-full", "-mt-2");

        const memberGrid = document.createElement("div");
        memberGrid.classList.add("grid", "grid-automodify", "gap-4");

        member.forEach((m) => {
            if( typeof m.icon === 'undefined' || typeof m.name === 'undefined' || typeof m.description === 'undefined' ){
                console.error("メンバーの情報が不足しています。");
                return;
            }
            // 親要素
            const memberContainer = document.createElement("div");
            memberContainer.classList.add("flex", "flex-col", "w-full", "sm:w-[350px]", "rounded-lg", "shadow-lg", "border", "border-gray-200", "p-4", "h-[350px]", "justify-center", "items-center", "gap-4");

            const memberIcon = document.createElement("div");
            memberIcon.classList.add("w-[200px]", "h-[200px]", "rounded-full", "object-cover", "bg-center");
            memberIcon.style.backgroundImage = `url(/images/icons/${m.icon})`;
            memberIcon.style.backgroundSize = "100%";

            // メンバーの説明・紹介の部分
            const memberDescription = document.createElement("div");
            memberDescription.classList.add("w-full", "h-[100px]", "flex", "flex-col", "gap-2", "items-center");

            const memberName = document.createElement("div");
            memberName.classList.add("w-full", "h-[40px]", "p-1", "text-center", "text-3xl", "items-center", "font-semibold", "rounded-lg");
            memberName.textContent = m.name;
            memberDescription.appendChild(memberName);

            const memberRole = document.createElement("div");
            memberRole.classList.add("w-full", "rounded-lg");
            if (m.description.length > 50) {
                memberRole.classList.add("text-sm");
            }
            memberRole.textContent = m.description;
            memberDescription.appendChild(memberRole);
            // メンバーの説明・紹介の部分

            memberContainer.appendChild(memberIcon);
            memberContainer.appendChild(memberDescription);

            memberGrid.appendChild(memberContainer);

            memberContainer.addEventListener('click', () => {
                showMemberModal(m);
            })
        })

        containerOfDiv.appendChild(title);
        containerOfDiv.appendChild(headerLine);
        containerOfDiv.appendChild(memberGrid);

        const membersInit = document.getElementById('membersInit');
        membersInit.appendChild(containerOfDiv);
    })
}

/*
        <div class="flex flex-col w-full h-full opacity-100 items-center justify-center">
            <div class="flex flex-col w-[80%] h-[80%] bg-white p-6 bg-opacity-100">
                <div class="flex flex-row justify-between">
                    <div class="flex flex-row">
                        <img id="modalImage" class="w-[100px] h-[100px] rounded-full" src="" alt="">
                        <div class="flex flex-col ml-4">
                            <div class="text-2xl font-bold"> </div>
                            <div class="text-lg"> </div>
                        </div>
                    </div>
                    <button id="modalClose" class="text-2xl font-bold"> X </button>
                </div>
                <div id="modalDescription" class="mt-4"> </div>
            </div>  
        </div>
*/
/**
 * 
 * @param {{ name : string , description : string, icon : string, sns?: { url : string, name : string }[] }} member 
 */
function showMemberModal(member) {
    toggleMemberModal();

    const PARENTMODAL = document.getElementById('membersModal');

    const modalContainer = document.createElement('modalContainer');
    modalContainer.classList.add("flex", "flex-col", "w-full", "h-full", "items-center", "justify-center");

    const modalContent = document.createElement('div');
    modalContent.classList.add("flex", "flex-col", "w-[80%]", "h-[80%]", "lg:w-[800px]", "bg-white", "p-6", "bg-opacity-100", "rounded-lg", "relative");

    const modalHeader = document.createElement('div');
    modalHeader.classList.add("flex", "flex-col", "justify-between", "items-center");

    const modalHeaderContent = document.createElement('div');
    modalHeaderContent.classList.add("flex", "flex-col", "items-center", "p-4");

    const modalImage = document.createElement('div');
    modalImage.classList.add("w-[200px]", "h-[200px]", "rounded-full", "bg-center");
    modalImage.style.backgroundImage = `url(/images/icons/${member.icon})`;
    modalImage.style.backgroundSize = "100%";
    modalHeaderContent.appendChild(modalImage);

    const modalText = document.createElement('div');
    modalText.classList.add("flex", "flex-col", "gap-4");

    const modalName = document.createElement('h1');
    modalName.classList.add("text-3xl", "font-bold", "text-center", "mt-4");
    modalName.textContent = member.name;

    const modalDescription = document.createElement('p');
    modalDescription.classList.add("text-xl", "text-center");
    modalDescription.textContent = member.description;

    modalText.appendChild(modalName);
    modalText.appendChild(modalDescription);

    modalHeaderContent.appendChild(modalText);

    if (typeof member.sns !== 'undefined' || typeof CacheMemberSNS.get(member.name) !== "undefined") {
        const snsContainer = document.createElement('div');
        snsContainer.classList.add("flex", "flex-row", "gap-4", "mt-4");

        console.log(CacheMemberSNS.get(member.name));
        const sns = typeof member.sns === 'undefined' ? CacheMemberSNS.get(member.name) : member.sns;


        sns.forEach((sns) => {
            const snsIcon = document.createElement('img');
            snsIcon.classList.add("w-[50px]", "h-[50px]", "rounded-2xl", "cursor-pointer", "hover:scale-110", "transition-transform", "duration-200");
            snsIcon.src = SNSIconsConstant[sns.name];
            snsIcon.title = sns.url + "にアクセス";
            snsIcon.alt = sns.name;
            snsIcon.addEventListener('click', () => {
                window.open(sns.url, '_blank');
            })
            snsContainer.appendChild(snsIcon);
        })

        modalHeaderContent.appendChild(snsContainer);
    }

    const closeButton = document.createElement('button');
    closeButton.classList.add("text-2xl", "font-bold", "absolute", "top-0", "right-0", "cursor-pointer", "p-2", "hover:bg-gray-200", "rounded-lg", "h-18", "w-18", "items-center", "text-center", "justify-center");
    closeButton.innerHTML = `
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path d="M1225 11570 l-1210 -1210 1973 -1973 c1084 -1084 1972 -1979 1972
                -1987 0 -8 -888 -903 -1972 -1987 l-1973 -1973 1213 -1212 1212 -1213 1973
                1973 c1084 1084 1979 1972 1987 1972 8 0 903 -888 1987 -1972 l1973 -1973
                1212 1213 1213 1212 -1973 1973 c-1084 1084 -1972 1979 -1972 1987 0 8 888
                903 1972 1987 l1973 1973 -1213 1212 -1212 1213 -1973 -1973 c-1084 -1084
                -1979 -1972 -1987 -1972 -8 0 -902 887 -1985 1970 -1083 1084 -1972 1970
                -1975 1970 -3 0 -550 -545 -1215 -1210z"/>
            </g>
        </svg>`
    

    modalHeader.appendChild(modalHeaderContent);
    modalHeader.appendChild(closeButton);

    closeButton.addEventListener('click', () => {
        setTimeout(() => {
            modalContainer.remove();
            PARENTMODAL.classList.add('hidden');
        }, 200);
        toggleMemberModal();
    })

    modalContent.appendChild(modalHeader);
    modalContainer.appendChild(modalContent);

    PARENTMODAL.appendChild(modalContainer);
}

function toggleMemberModal() {
    const modal = document.getElementById('membersModal');
    if (modal.classList.contains('flex')) {
        // 閉じる動作
        modal.classList.add('opacity-100');
        setTimeout(() => {
            modal.classList.remove('opacity-100');
            modal.classList.add('opacity-0');
        }, 100);
        modal.classList.remove('flex');
    } else {
        // 開く動作
        modal.classList.add('opacity-0');
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modal.classList.add('opacity-100');
        }, 100);
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}