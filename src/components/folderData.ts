type FolderDataType = {
  id: number,
  label: string,
  icon?: string,
  path?: string,
  children?: FolderDataType[]
}

const folderData: FolderDataType[] = [
  {
    "id": 1,
    "label": "Dashboard",
    "icon": "home",
    "path": "/dashboard"
  },
  {
    "id": 2,
    "label": "Projects",
    "icon": "folder",
    "children": [
      {
        "id": 21,
        "label": "Frontend",
        "path": "/projects/frontend",
        "children": [
          {
            "id": 211,
            "label": "React App",
            "path": "/projects/frontend/react",
            "children": [
              {
                "id": 2111,
                "label": "HTML",
              },
              {
                "id": 2112,
                "label": "CSS",
              },
              {
                "id": 2113,
                "label": "JS",
              }
            ]
          },
          {
            "id": 212,
            "label": "Vue App",
            "path": "/projects/frontend/vue"
          }
        ]
      },
      {
        "id": 22,
        "label": "Backend",
        "path": "/projects/backend",
        "children": [
          {
            "id": 221,
            "label": "Node API",
            "path": "/projects/backend/node"
          },
          {
            "id": 222,
            "label": "Django API",
            "path": "/projects/backend/django"
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "label": "Settings",
    "icon": "settings",
    "children": [
      {
        "id": 31,
        "label": "Profile",
        "path": "/settings/profile"
      },
      {
        "id": 32,
        "label": "Billing",
        "path": "/settings/billing"
      }
    ]
  },
  {
    "id": 4,
    "label": "Help",
    "icon": "help",
    "path": "/help"
  }
]

export default folderData;