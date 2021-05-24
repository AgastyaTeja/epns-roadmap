let timeLineElements = [
    {
        id: 1,
        title: "Audit and TGE",
        when: "2021 Q1",
        description: "Q1 has seen successful completion EPNS $PUSH Token Generation Event. ChainSafe Systems completed an audit of EPNS token, staking and Time Vesting smart contracts. No critical issues were found",
        moreInfo: "https://medium.com/ethereum-push-notification-service/epns-monthly-blocks-98d0f3c0d0db",
        icon: "code",
        status: "Completed ✅"
    },
    {
        id: 2,
        title: "Vesting, NFT, Staking and Token",
        when: "2021 Q1",
        description: "Introduced liquidty mining and staking. Initiated $ROCKSTAR of EPNS NFTs and $PUSH rewards",
        moreInfo: "https://medium.com/ethereum-push-notification-service/kicking-off-the-epns-nft-community-drops-6a5c49808cf",
        icon: "code",
        status: "Completed ✅"
    },

    {
        id: 3,
        title: "Subgraph",
        when: "2021 Q1",
        description: "As part of EPNS Tooling and Infrastructure we will be developing EPNS subgraphs using the graph protocol. The graph is an indexing protocol for querying networks like Ethereum and IPFS",
        moreInfo: "https://medium.com/ethereum-push-notification-service/epns-monthly-blocks-98d0f3c0d0db",
        icon: "code",
        status: "In Progress ⏳"
    },
    {
        id: 4,
        title: "dApp Notification",
        when: "2021 Q1",
        description: "Features like on-chain governance upgrades, ability to create channels, subscribe/unsubscribe, staking rewards, send notifications. Some more additional features will be added as part of v1",
        moreInfo: "https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12",
        icon: "code",
        status: "In Progress ⏳"
        
    },
    {
        id: 5,
        title: "Frontend upgrades",
        when: "2021 Q1",
        description: "Q1 will see several UI/UX updates to the EPNS app. This will ensure the EPNS dApp experience easier and smoother",
        moreInfo: "https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12",
        icon: "code",
        status: "In Progress ⏳"
    },
    {
        id: 6,
        title: "Validation/ development with strategic collabs",
        when: "2021 Q2",
        description: "Q1 has seen several EPNS team collaborating with innovative teams within the Web3 space. Q2 will see the EPNS team continue the trend",
        moreInfo: "https://medium.com/ethereum-push-notification-service/soaring-through-the-sky-with-epns-pilot-programs-4d02f09a6a8",
        icon: "code",
        status: "2021 Q2 🗓️"
    },
    {
        id: 7,
        title: "Complete Protocol V1",
        when: "2021 Q2",
        description: "Several interesting features are planned as a part of complete V1 protocol.",
        moreInfo: "https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12",
        icon: "code",
        status: "2021 Q2 🗓️"
    },
    {
        id: 8,
        title: "Governance, Usage mining",
        when: "2021 Q2",
        description: "Governance capabilities like online voting, incentives towards developling 3rd party channels via the protocol, incentives for active participation in the protocol",
        moreInfo: "https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12",
        icon: "code",
        status: "2021 Q2 🗓️"
    },
    {
        id: 9,
        title: "Backend SDKs",
        when: "2021 Q2",
        description: "Backend SDK to allow easy integration for protocols wanting to send notifications interfacing directly with the EPNS protocol smart contracts",
        moreInfo: "https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12",
        icon: "code",
        status: "2021 Q2 🗓️"
    },
    {
        id: 10,
        title: "Browser Extension",
        when: "2021 Q2",
        description: "A very lightweight yet powerful too that provides a reduced but still rich features set of all the capabilities available in the dApp and mobile App",
        moreInfo:"https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12",
        icon: "code",
        status: "2021 Q2 🗓️"
    },

    {
        id: 11,
        title: "Audit and Mainnet",
        when: "2021 Q3",
        description: "Auditing and deploying the protocol on the ethereum mainnet with the necessary communication middleware APIs and SDKs",
        moreInfo:"https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12",
        icon: "code",
        status: "2021 Q3 🗓️"
    },
    {
        id: 12,
        title: "Front-end SDK",
        when: "2021 Q3",
        description: "Will enable 3rd party services to interface with the channels, and facilitate sending notifications to users directly from third party dApp front-ends",
        moreInfo:"https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12",
        icon: "code",
        status: "2021 Q3 🗓️"
    },
    {
        id: 13,
        title: "Third Party Notif Receiving SDK",
        when: "2021 Q3",
        description: "Will enable 3rd party services to notiications",
        moreInfo:"https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12",
        icon: "code",
        status: "2021 Q3 🗓️"
    },
    {
        id: 14,
        title: "MetaTx and L2 notifs",
        when: "2021 Q3",
        description: "Enabling subscription va meta transactions and Layer 2 support for the protocol",
        moreInfo:"https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12",
        icon: "code",
        status: "2021 Q3 🗓️"
    },
    {
        id: 15,
        title: "Push Nodes P2P alpha",
        when: "2021 Q3",
        description: "Establishing a p2p network of PUSH nodes. Implmenting a p2p Push nodes incentive mechanism and pinning of notification payloads on IPFS",
        moreInfo:"https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12",
        icon: "code",
        status: "2021 Q3 🗓️"
    },
    {
        id: 16,
        title: "Verification based filtering",
        when: "2021 Q4",
        description: "Verification badges and social proofs that can be used as a reputation score and to filter channels on the frontend",
        moreInfo:"https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12",
        icon: "code",
        status: "2021 Q4 🗓️"
    },
    {
        id: 17,
        title: "Mobile App Channel Discovery",
        when: "2021 Q4",
        description: "Improving channels discovery, muting of notifications, report spam, scanning QR codes to subscribe to channels",
        moreInfo:"https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12",
        icon: "code",
        status: "2021 Q4 🗓️"
    },
    {
        id: 18,
        title: "Mobile App v1 beta",
        when: "2021 Q4",
        description: "Will include features like notifications search, pagination, different screen layouts, profile information, ability to claim passive earnings from the dashboard",
        moreInfo:"https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12",
        icon: "code",
        status: "2021 Q4 🗓️"
    },
    {
        id: 19,
        title: "Integrating Cermaic DID",
        when: "2021 Q4",
        description: "Embracing Ceramic protocol and DID in EPNS protcol to enable blockchain agnostic behavior for receifving nodes of EPNS",
        moreInfo:"https://medium.com/ethereum-push-notification-service/advancing-ceramic-networks-decentralized-identity-network-with-epns-264b24a7508f",
        icon: "code",
        status: "2021 Q4 🗓️"
    },
    {
        id: 20,
        title: "P2P Push Nodes incentives",
        when: "2021 Q4",
        description: "Implementing a P2P Push nodes incentive mechanism",
        moreInfo:"https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12",
        icon: "code",
        status: "2021 Q4 🗓️"
    },

]

export default timeLineElements