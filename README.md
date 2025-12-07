# Laravel React Starter Kit

A clean and minimal starter kit for building modern web applications with Laravel 12, React 18, Inertia.js, and TypeScript.

> **No authentication, no admin panel, just pure starter kit ready for your project.**

Created by [syaafiudinm](https://github.com/syaafiudinm)

## Features

-  **Laravel 12** - Latest Laravel framework
-  **React 18** - Modern React with TypeScript support
-  **Inertia.js** - Build single-page apps without building an API
-  **Tailwind CSS v4** - Latest Tailwind with new engine
-  **TypeScript** - Full type safety
-  **MySQL** - Pre-configured database connection
-  **Pest PHP** - Modern testing framework
-  **Vite** - Lightning fast HMR

## Tech Stack

- Laravel 12
- React 18
- Inertia.js
- TypeScript
- Tailwind CSS v4
- MySQL
- Vite

## Requirements

- PHP >= 8.2
- Composer
- Node.js >= 18
- MySQL

## Installation

1. Clone the repository
```bash
git clone https://github.com/syaafiudinm/inertia-starter-kit.git
cd inertia-starter-kit
```

2. Install PHP dependencies
```bash
composer install
```

3. Install JavaScript dependencies
```bash
npm install
```

4. Copy environment file
```bash
cp .env.example .env
```

5. Generate application key
```bash
php artisan key:generate
```

6. Configure your database in `.env`
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

7. Run migrations
```bash
php artisan migrate
```

8. Start development server
```bash
# Terminal 1 - Vite dev server
npm run dev

# Terminal 2 - Laravel server
php artisan serve
```

9. Open your browser at `http://localhost:8000`

## Project Structure
```
├── app/
│   └── Http/
│       └── Middleware/
│           └── HandleInertiaRequests.php
├── resources/
│   ├── css/
│   │   └── app.css
│   ├── js/
│   │   ├── Pages/
│   │   │   └── Home.tsx
│   │   ├── app.tsx
│   │   ├── bootstrap.ts
│   │   ├── global.d.ts
│   │   └── vite-env.d.ts
│   └── views/
│       └── app.blade.php
├── routes/
│   └── web.php
└── vite.config.ts
```

## Building for Production
```bash
npm run build
```

## What's Not Included

This starter kit intentionally excludes:
- Authentication system (Laravel Breeze/Fortify)
- Admin panel
- User management
- Authorization/Permissions

This gives you complete freedom to implement authentication and authorization in your own way, or skip it entirely for public-facing applications.

## Customization

### Adding New Pages

1. Create a new component in `resources/js/Pages/`
```tsx
// resources/js/Pages/About.tsx
import { Head } from '@inertiajs/react';

export default function About() {
    return (
        <>
            
            About Page
        </>
    );
}
```

2. Add route in `routes/web.php`
```php
Route::get('/about', function () {
    return Inertia::render('About');
});
```

### Shared Data

Edit `app/Http/Middleware/HandleInertiaRequests.php` to share data across all pages:
```php
public function share(Request $request): array
{
    return [
        ...parent::share($request),
        'appName' => config('app.name'),
        'flash' => [
            'success' => fn () => $request->session()->get('success'),
            'error' => fn () => $request->session()->get('error'),
        ],
    ];
}
```

## License

This project is open-sourced software licensed under the [MIT license](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Credits

- [Laravel](https://laravel.com)
- [React](https://react.dev)
- [Inertia.js](https://inertiajs.com)
- [Tailwind CSS](https://tailwindcss.com)

## Support

If you find this project helpful, please give it a ⭐️ on GitHub!

---

Built with ❤️ by [syaafiudinm](https://github.com/syaafiudinm)
