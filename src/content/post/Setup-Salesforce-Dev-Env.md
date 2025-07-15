---
publishDate: 2025-07-15T00:00:00Z
author: Daniel Rodriguez
title: 'From Zero to Ready: Master Your Salesforce Dev Environment Fast'
excerpt: Skip the confusion! This guide shows you exactly how to configure your Salesforce dev environment so you can focus on building.
image: ~/assets/images/blog/Salesforce-Dev-Environment-Fast.png
category: Personal
tags:
  - salesforce
  - development
  - sfdevelopment
---
## **Recommended First Steps (Practical Approach)**

1. Install **Salesforce DX CLI**.
2. Setup **Visual Studio Code** with Salesforce Extensions.
3. Authenticate with a Developer org (`sf login web`).
4. Create your first scratch org and push simple metadata changes.
5. Commit changes to Git and integrate your CI/C

## **1. Salesforce DX (Developer Experience) – CLI**

Salesforce DX is Salesforce’s modern development CLI toolkit. It helps with project creation, deployments, managing scratch orgs, packaging, and testing.

### Installation (All platforms):

- **macOS** _(with Homebrew)_:

```bash
brew tap salesforce/sfdx
brew install sfdx
```

- **Windows** _(using Chocolatey)_:

```powershell
choco install sfdx-cli
```

- **Linux** _(with npm)_:

```bash
npm install @salesforce/cli --global
```

> **Official docs**: [Salesforce CLI Install](https://developer.salesforce.com/tools/sfdxcli

### Common Salesforce CLI commands:

```bash
# Login to Salesforce org
sf login web

# Create new scratch org
sf org create scratch -f config/project-scratch-def.json -a MyScratchOrg -d 7

# Push source code to scratch org
sf project deploy start

# Run Apex tests
sf apex test run

# Open org
sf org open
```

---

## **2. IDE and Text Editors**

### Recommended IDE:

**Visual Studio Code** (All platforms, free, recommended by Salesforce)
    - [Download VS Code](https://code.visualstudio.com/download)
Install these essential Salesforce extensions from VS Code Marketplace:

- **[Salesforce Extension Pack](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode)**
- **[Apex PMD (Code Quality Analysis)](https://marketplace.visualstudio.com/items?itemName=chuckjonas.apex-pmd)** _(recommended for best practices enforcement)_

---

## **3. Version Control (Git)**

Version control is essential. Use **Git** and host your repositories on services like GitHub, GitLab, or Bitbucket.

### Install Git:

**macOS** _(Homebrew)_:

```bash
brew install git
```

**Windows** _(Chocolatey)_:

```powershell
choco install git
```

**Linux** _(apt/yum)_:

```bash
sudo apt install git # Ubuntu/Debian
sudo yum install git # CentOS/RHEL
```

### Typical Git-based workflow:

- Clone your Salesforce DX repository:

```bash
git clone https://github.com/your-repo.git
```

- Branching:

```bash
git checkout -b feature/new-component
```

- Commit changes:

```bash
git add .

git commit -m "Added new Lightning component"

git push origin feature/new-component
```

---

## **4. Package and Dependency Management**

**Salesforce DX** supports modular app structure through packages:

- **Unlocked Packages** (recommended for AppExchange apps)
    - Allow modular, versioned deployments
  - Improve maintainability, easier upgrades

Create unlocked packages with Salesforce CLI:

```bash
sf package create --name "MySalesforceApp" --path force-app --packagetype Unlocked
sf package version create --package "MySalesforceApp" --installationkeybypass --wait 10
```

---

## **5. Scratch Orgs**

- Scratch orgs are temporary Salesforce environments used for dev/testing.
- Fast, disposable, and easy-to-use for developers.

### Define scratch org:

Create a `project-scratch-def.json` file:

```json
{
  "orgName": "MyScratchOrg",
  "edition": "Developer",
  "features": ["Communities", "LightningSalesConsole"],
  "settings": {
    "lightningExperienceSettings": { "enableS1DesktopEnabled": true }
  }
}
```

Then use Salesforce CLI to create scratch org:

```bash
sf org create scratch -f project-scratch-def.json -a MyScratchOrg -d 7
```

---

## **6. Continuous Integration (CI/CD)**

Common CI/CD providers for Salesforce DX automation (deployment, tests, package management):

- **GitHub Actions** _(highly recommended, native integration)_
- **GitLab CI**
- **Bitbucket Pipelines**

### Example GitHub Actions Workflow (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to Salesforce
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Salesforce CLI
        run: |
          npm install @salesforce/cli --global
          sf --version

      - name: Authenticate Salesforce
        run: sf org login jwt --clientid ${{ secrets.CLIENT_ID }} --jwtkeyfile server.key --username ${{ secrets.SF_USERNAME }} --instanceurl https://login.salesforce.com

      - name: Deploy to Org
      - run: sf project deploy start
```

---

## **7. Additional Useful Tools & Extensions**

- **Salesforce Inspector** (Chrome/Firefox browser extension)
- Great for real-time data inspection and debugging
- [Install Salesforce Inspector](https://github.com/sorenkrabbe/Chrome-Salesforce-inspector)
- **Data Loader CLI**
- For bulk import/export data scenarios, Salesforce Data Loader(or the CLI variant) is useful.
- [Data Loader Guide](https://developer.salesforce.com/docs/atlas.en-us.dataLoader.meta/dataLoader/command_line_intro.htm)

  Install Data Loader: [[Download and Install Data Loader]]

---

## **8. Salesforce Platform Tools and Web Resources**

#### Salesforce Setup (Web Interface)

- [Salesforce Developer Console](https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_tools_intro.htm)
- [Lightning App Builder](https://trailhead.salesforce.com/content/learn/modules/lightning_app_builder)

#### Trailhead (Learning & Documentation)

- [Salesforce DX Trailhead](https://trailhead.salesforce.com/en/content/learn/modules/sfdx_app_dev)
- [Salesforce Developer Docs](https://developer.salesforce.com/docs/)

---

## **Summary of Modern Salesforce Development Toolchain**

| Component               | Recommendation                                 | macOS ✅ | Windows ✅ | Linux ✅ |
| ----------------------- | ---------------------------------------------- | -------- | ---------- | -------- |
| CLI Tooling             | Salesforce DX CLI                              | ✅       | ✅         | ✅       |
| IDE/Text Editor         | VS Code                                        | ✅       | ✅         | ✅       |
| Version Control         | Git                                            | ✅       | ✅         | ✅       |
| Package Management      | Salesforce DX Unlocked Packages                | ✅       | ✅         | ✅       |
| CI/CD                   | GitHub Actions, GitLab CI, Bitbucket Pipelines | ✅       | ✅         | ✅       |
| Scratch Org Environment | Salesforce DX Scratch Orgs                     | ✅       | ✅         | ✅       |
| Browser Tools           | Salesforce Inspector                           | ✅       | ✅         | ✅       |
| Data Tools              | Salesforce Data Loader (CLI/GUI)               | ✅       | ✅         | ✅       |

---
