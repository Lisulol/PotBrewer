# 🧪 PotBrewer
A potion brewer made using next.js

## 🛠️ Built With

- **[Next.js 15](https://nextjs.org/)** - React framework with static export
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library for React
- **[Shadcn](https://ui.shadcn.com/)** - UI library
- **[Tabler Icons](https://tabler-icons.io/)** - Beautiful icon set

## 🎮 How to Play

1. Click the **"Ingredients"** button on the home page
2. Select **two different ingredients** by clicking "Add It!" on each card
3. Watch the brewing animation as the ingredients combine
4. Discover your potion's unique effect!
5. Click **"Return"** to brew another potion

## 🧪 Available Potions

Combine different ingredients to discover all 10 potions:

- **Gay Potion** - Femboy extract + Rabbit's foot
- **Charisma Explosion** - Femboy extract + Friend's Vape
- **Vape Portal** - Rabbit's foot + Friend's Vape
- **The Polish Debugger** - School Server + Femboy extract
- **Femboy's Luck Latte** - Rabbit's foot + School Server
- **Bocian's Hopium** - Bocian + School Server
- **Vape of Enlightenment** - Bocian + Friend's Vape
- **The Gender Juice** - Rabbit's foot + Bocian
- **The Vape Prophet** - School Server + Friend's Vape
- **Polish Vape Mirage** - Bocian + Femboy extract

## 📁 Project Structure

```
potbrewer/
├── app/
│   ├── Ingredients/
│   │   └── page.tsx          # Ingredient selection page
│   ├── layout.tsx             # Root layout with providers
│   ├── page.tsx               # Home page with brewing pot
│   └── globals.css            # Global styles
├── lib/
│   ├── components/
│   │   ├── Pot/               # Animated brewing pot component
│   │   └── potions/           # Individual potion result components
│   │       ├── pot1/
│   │       ├── pot2/
│   │       └── ... (pot1-pot10)
│   └── providers/
│       └── PotionContext.tsx  # Global state for ingredients
├── components/
│   └── ui/                    # Reusable UI components
├── public/
│   └── assets/                # Images and static files
└── next.config.js             # Next.js configuration

```
## 🌐 Live Demo

Visit the live site: [potbrewer.antonilisowski.xyz](https://potbrewer.antonilisowski.xyz)
