
/*

    このファイルは、メンバー情報を定義するためのファイルです。
    このファイルを編集することで、メンバー情報を変更することができます。

    ※追加の方法
    この形式のデータを
    ```
    {
        name : "名前",
        description : "説明",
        icon : "アイコンのファイル名",

        // 任意
        sns : [
            {
                url : "URL",
                name : "SNSの名前" // 今のところ Discord, X, Github, Youtube に対応しています。
            }
        ]
    }
    ```

    ↓該当するメンバーのグループに追加してください。↓
    
    ※例 : 通常メンバーの場合
    ```
    "メンバー": [
        /*
            ここのセクションの中に、うえのデータを追加してください。
            自動で反映されます。
        * /
    ]   
    ```

    ※例 : 技術メンバーの場合
    ```
    "技術メンバー": [
        /*
            ここのセクションの中に、うえのデータを追加してください。
            自動で反映されます。
        * /
    ]   
    ```

    このような感じです。新しいセクションを追加する場合は、 "新しいセクション": [] という形式で追加してください。
    そのセクション内にメンバーを追加するときは、上記の例のように追加してください。

    ※注意
    タイポには注意してください。タイポがあると、エラーが発生する可能性があります。
    iconは /images/icons/ にある画像を指定してください。
    
*/

const members = {
    "幹部メンバー": [
        {
            name: "WeatherQuake",
            description: "この団体の責任者",
            icon : "wq.png",
            sns : [
                {
                    url : "https://twitter.com/WeatherQuake",
                    name : "X"
                },
                {
                    url : "https://discord.com/users/1268227881188855933",
                    name : "Discord"
                },
            ]
        },
        {
            name: "Yumin",
            description: "副管理者",
            icon : "yumi_nyan.webp",
            sns : [
                {
                    url : "https://discord.com/users/1282659821333643281",
                    name : "Discord"
                },
                {
                    url : "https://twitter.com/yuminQuakelive",
                    name : "X"
                },
                {
                    url : "https://twitter.com/Subyumin531963",
                    name : "X"                   
                },
                {
                    url : "https://www.youtube.com/channel/UC2w7I3ZlZp1e8Z2Q1Qc2F5w",
                    name : "Youtube"
                }
            ]
        }
    ],
    "メンバー": [
        {
            name : "Yumin",
            description : "yuminです。災害情報を「画面」で伝え、だれでもわかりやすい情報提供を目指します。",
            icon : "yumi_nyan.webp"
        },
        {
            name : "綾織アオイ",
            description : "綾織アオイです。災害情報発信について興味があり、「わかりやすく見やすい災害情報」を作り多くの層に発信したいと思います。",
            icon : "aoi.webp"
        },
        {
            name : "Shirahama_EEW",
            description : "Shirahama_EEWです。小学生の頃から地震や津波などに興味を持ち、現在は地震観測をしています。 少しでも皆さんのお力になれるような情報発信を可能な限りやって行きたいと思います。",
            icon : "shirahama.webp"
        },
        {
            name : "かたこふー",
            description : "かたこふーです！地震災害に興味のある学生です。YouTubeを通じたライブ配信や、X（旧Twitter）での防災の呼びかけなどを行なっています。",
            icon : "katakofu.webp"
        },
        {
            name : "ランサブ",
            description : "地震のシミュレーション動画を作るのが趣味です。地震のライブ配信とかもしています。",
            icon : "ransub.webp"
        },
        {
            name : "砂漠の砂",
            description : "砂漠の砂です。WQBosaiで、様々なことを学びたいです！",
            icon : "sabakusuna.png"
        }
    ],
    "技術メンバー": [
        {
            name : "Yumin",
            description : "※※配信と同一※※",
            icon : "yumi_nyan.webp",
        },
        {
            name : "くれすた",
            description : "くれすたです。技術を使っていろいろなことをしていきたいです！",
            icon : "kuresuta.jpg",
            sns : [
                {
                    url : "https://discord.com/users/797698959027077130",
                    name : "Discord"
                }
            ]
        },
        {
            name : "Mr.ドラ",
            description : "Mr.ドラです。気象・地震に興味があり、気象や地震のWebアプリを作っています。誰もが使いやすいアプリを作れるように頑張ります。",
            icon : "mrdora.jpg"
        },
        {
            name : "WeatherQuake",
            description : "気象/地象に関係するWebアプリやサイトをつくっています。",
            icon : "wq.png",
        }
    ]
}

const SNSIconsConstant = {
    "Discord" : "/images/sns/discord.svg",
    "X" : "/images/sns/x.svg",
    "Github": "/images/sns/github.svg",
    "Youtube": "/images/sns/youtube.svg",
}